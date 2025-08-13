import { CricketIcon, SoccerIcon, TennisIcon } from "../../assets/SVGs/allSVGs";

export function appendInitialData(rawData, selectionIds = null) {
    const selectionIdArray = Array.isArray(selectionIds)
        ? selectionIds.map(String)
        : typeof selectionIds === "string"
            ? [selectionIds]
            : [];
    if (!selectionIdArray.length) {
        console.error("No selectionIds provided");
        return [];
    }
    let dataArray;
    if (Array.isArray(rawData)) {
        dataArray = rawData;
    } else if (rawData?.data?.data && Array.isArray(rawData.data.data)) {
        dataArray = rawData.data.data;
    } else {
        console.error("Invalid rawData format");
        return [];
    }
    const result = [];
    const seenIds = new Set();
    dataArray.forEach(market => {
        try {
            const parsedMarket =
                typeof market === "string"
                    ? JSON.parse(market.replace(/\\/g, ""))
                    : market;

            if (Array.isArray(parsedMarket.runners)) {
                parsedMarket.runners.forEach(runner => {
                    const idStr = String(runner.selectionId);
                    if (
                        selectionIdArray.includes(idStr) &&
                        !seenIds.has(idStr)
                    ) {
                        result.push({
                            selectionId: runner.selectionId,
                            availableToBack: runner.ex?.availableToBack || [],
                            availableToLay: runner.ex?.availableToLay || []
                        });
                        seenIds.add(idStr);
                    }
                });
            }
        } catch (err) {
            console.warn("Error parsing market:", err);
        }
    });

    return result;
}

const sportIconMap = {
    "4": CricketIcon,
    "1": SoccerIcon,
    "2": TennisIcon
};
export const groupSportsData = (games, searchTerm) => {
    if (!games?.data) return [];

    const newGroupedData = games?.data?.data?.map(sportItem => {
        const doc = sportItem.doc || [];

        const groupedByTournament = doc.reduce((acc, match) => {
            const tournamentId = match?.tournament?.id;
            const tournamentName = match?.tournament?.name?.trim() || 'Unknown Tournament';

            if (!tournamentId) return acc;

            if (!acc[tournamentName]) {
                acc[tournamentName] = {
                    id: tournamentId,
                    title: tournamentName,
                    matches: [],
                };
            }

            acc[tournamentName].matches.push({
                name: match?.name?.trim(),
                id: match?.id,
                isPlay: match?.isPlay,
                marketId: match?.marketId,
                numOfBookmaker: match?.numOfBookmaker,
                numOfFancy: match?.numOfFancy,
                openDate: match?.openDate,
                sport: match?.sport,
                tournament: match?.tournament,
            });

            return acc;
        }, {});

        return {
            id: sportItem._id,
            name: sportItem.name,
            leagues: Object.values(groupedByTournament),
            icon: sportIconMap[sportItem._id] || null
        };
    });

    return newGroupedData?.map(sport => ({
        ...sport,
        leagues: sport.leagues
            .map(league => ({
                ...league,
                matches: league.matches.filter(match =>
                    match.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
            }))
            .filter(league => league.matches.length > 0)
    }))
        .filter(sport => sport.leagues.length > 0);
};


export const newGroupSportsData = (games) => {
    if (!games?.data?.data) return [];

    return games.data.data.map(sportItem => {
        const doc = sportItem.doc || [];

        const groupedByTournament = doc.reduce((acc, match) => {
            const tournamentId = match?.tournament?.id;
            const tournamentName = match?.tournament?.name?.trim() || 'Unknown Tournament';

            if (!tournamentId) return acc;

            if (!acc[tournamentName]) {
                acc[tournamentName] = {
                    id: tournamentId,
                    title: tournamentName,
                    matches: [],
                };
            }

            acc[tournamentName].matches.push({
                name: match?.name?.trim(),
                id: match?.id,
                isPlay: match?.isPlay,
                marketId: match?.marketId,
                numOfBookmaker: match?.numOfBookmaker,
                numOfFancy: match?.numOfFancy,
                openDate: match?.openDate,
                sport: match?.sport,
                tournament: match?.tournament,
            });

            return acc;
        }, {});

        return {
            id: sportItem._id,
            name: sportItem.name,
            leagues: Object.values(groupedByTournament),
        };
    });
};

export const groupInPlaySportsData = (games) => {
    if (!games?.data?.data) return [];

    return games.data.data.map(sportItem => {
        const doc = sportItem.doc || [];

        const groupedByTournament = doc.reduce((acc, match) => {
            const tournamentId = match?.tournament?.id;
            const tournamentName = match?.tournament?.name?.trim() || 'Unknown Tournament';

            if (!tournamentId || !match?.isPlay) return acc;

            if (!acc[tournamentName]) {
                acc[tournamentName] = {
                    id: tournamentId,
                    title: tournamentName,
                    matches: [],
                };
            }

            acc[tournamentName].matches.push({
                name: match?.name?.trim(),
                id: match?.id,
                isPlay: match?.isPlay,
                marketId: match?.marketId,
                numOfBookmaker: match?.numOfBookmaker,
                numOfFancy: match?.numOfFancy,
                openDate: match?.openDate,
                sport: match?.sport,
                tournament: match?.tournament,
            });

            return acc;
        }, {});

        return {
            id: sportItem._id,
            name: sportItem.name,
            leagues: Object.values(groupedByTournament),
        };
    });
};
