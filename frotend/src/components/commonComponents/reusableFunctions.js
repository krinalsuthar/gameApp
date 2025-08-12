// export function appendInitialData(rawData, selectionIds = null) {
//     console.log("🚀 ~ appendInitialData ~ selectionIds:", selectionIds)
//     // Validate input and extract the array
//     let dataArray;
//     if (Array.isArray(rawData)) {
//         dataArray = rawData;
//     } else if (rawData?.data?.data && Array.isArray(rawData.data.data)) {
//         dataArray = rawData.data.data;
//     } else {
//         console.error("Invalid rawData format: expected an array or object with data.data array");
//         return [];
//     }

//     if (dataArray.length === 0) {
//         console.warn("rawData is empty");
//         return [];
//     }

//     // Ensure selectionIds is an array; convert single string to array, treat null/undefined as empty
//     const selectionIdArray = Array.isArray(selectionIds)
//         ? selectionIds
//         : typeof selectionIds === "string"
//             ? [selectionIds]
//             : [];

//     // Filter markets based on selectionIds (array or single)
//     const marketsToProcess = selectionIdArray.length > 0
//         ? dataArray.filter(data => {
//             try {
//                 // Remove backslashes and parse JSON
//                 const cleanedData = typeof data === "string" ? data.replace(/\\/g, '') : JSON.stringify(data);
//                 const parsedData = JSON.parse(cleanedData);
//                 // Check if any runner's selectionId matches
//                 return parsedData.runners.some(runner =>
//                     selectionIdArray.includes(runner.selectionId)
//                 );
//             } catch (error) {
//                 console.warn(`Error parsing or filtering market data for selectionIds ${selectionIdArray.join(", ")}:`, error);
//                 return false;
//             }
//         })
//         : dataArray;

//     if (selectionIdArray.length > 0 && marketsToProcess.length === 0) {
//         console.warn(`No markets found with selectionIds: ${selectionIdArray.join(", ")}`);
//         return [];
//     }

//     // Process markets and collect results
//     const result = marketsToProcess.map(data => {
//         try {
//             // Remove backslashes and parse JSON
//             const cleanedData = typeof data === "string" ? data.replace(/\\/g, '') : JSON.stringify(data);
//             const parsedData = JSON.parse(cleanedData);

//             if (!parsedData?.marketId || !Array.isArray(parsedData?.runners)) {
//                 console.warn(`Invalid market data for marketId: ${parsedData?.marketId}`);
//                 return null;
//             }

//             // Keep marketId with decimal point
//             const marketId = parsedData.marketId;

//             return {
//                 marketId: marketId,
//                 status: parsedData.status || "OPEN",
//                 numberOfRunners: parsedData.runners.length,
//                 runners: parsedData.runners.map(runner => ({
//                     selectionId: runner.selectionId, // Keep selectionId as is
//                     backOdds: runner.ex?.availableToBack?.[0]?.price || "-",
//                     layOdds: runner.ex?.availableToLay?.[0]?.price || "-"
//                 }))
//             };
//         } catch (error) {
//             console.error(`Error processing market data:`, error);
//             return null;
//         }
//     }).filter(Boolean);

//     return result;
// }

export function appendInitialData(rawData, selectionIds = null, marketIds = null) {
    console.log("🚀 ~ appendInitialData ~ selectionIds:", selectionIds);
    console.log("🚀 ~ appendInitialData ~ marketIds:", marketIds);

    // Validate input and extract the array
    let dataArray;
    if (Array.isArray(rawData)) {
        dataArray = rawData;
    } else if (rawData?.data?.data && Array.isArray(rawData.data.data)) {
        dataArray = rawData.data.data;
    } else {
        console.error("Invalid rawData format: expected an array or object with data.data array");
        return [];
    }

    if (dataArray.length === 0) {
        console.warn("rawData is empty");
        return [];
    }

    // Ensure selectionIds & marketIds are arrays
    const selectionIdArray = Array.isArray(selectionIds)
        ? selectionIds
        : typeof selectionIds === "string"
            ? [selectionIds]
            : [];

    const marketIdArray = Array.isArray(marketIds)
        ? marketIds.map(id => String(id).replace(".", ""))
        : typeof marketIds === "string"
            ? [marketIds.replace(".", "")]
            : [];

    const matchedBySelection = [];
    const matchedByMarketId = [];

    // First pass: match by selectionIds
    if (selectionIdArray.length > 0) {
        matchedBySelection.push(
            ...dataArray.filter(data => {
                try {
                    const cleanedData = typeof data === "string" ? data.replace(/\\/g, '') : JSON.stringify(data);
                    const parsedData = JSON.parse(cleanedData);
                    return parsedData.runners.some(runner =>
                        selectionIdArray.includes(runner.selectionId)
                    );
                } catch (error) {
                    console.warn(`Error parsing for selectionIds filter:`, error);
                    return false;
                }
            })
        );
    }

    // Second pass: match by marketIds (excluding already matched markets)
    if (marketIdArray.length > 0) {
        matchedByMarketId.push(
            ...dataArray.filter(data => {
                try {
                    const cleanedData = typeof data === "string" ? data.replace(/\\/g, '') : JSON.stringify(data);
                    const parsedData = JSON.parse(cleanedData);
                    const cleanedMarketId = String(parsedData.marketId).replace(".", "");

                    // Skip if already in matchedBySelection
                    const alreadyMatched = matchedBySelection.some(sel => {
                        const selData = JSON.parse(typeof sel === "string" ? sel.replace(/\\/g, '') : JSON.stringify(sel));
                        return String(selData.marketId).replace(".", "") === cleanedMarketId;
                    });

                    return !alreadyMatched && marketIdArray.includes(cleanedMarketId);
                } catch (error) {
                    console.warn(`Error parsing for marketIds filter:`, error);
                    return false;
                }
            })
        );
    }

    // Combine both results
    const finalMarkets = [...matchedBySelection, ...matchedByMarketId];

    // Process markets into output format
    const result = finalMarkets.map(data => {
        try {
            const cleanedData = typeof data === "string" ? data.replace(/\\/g, '') : JSON.stringify(data);
            const parsedData = JSON.parse(cleanedData);

            if (!parsedData?.marketId || !Array.isArray(parsedData?.runners)) {
                console.warn(`Invalid market data for marketId: ${parsedData?.marketId}`);
                return null;
            }

            return {
                marketId: parsedData.marketId,
                status: parsedData.status || "OPEN",
                numberOfRunners: parsedData.runners.length,
                runners: parsedData.runners.map(runner => ({
                    selectionId: runner.selectionId,
                    backOdds: runner.ex?.availableToBack?.[0]?.price || "-",
                    layOdds: runner.ex?.availableToLay?.[0]?.price || "-"
                }))
            };
        } catch (error) {
            console.error(`Error processing market data:`, error);
            return null;
        }
    }).filter(Boolean);

    return result;
}
