import api, { extranalApi } from "./apiClient";

export const loginUserApi = async (username, password) => {
    const { data } = await api.post("/login", { username, password });
    return data;
};

export const registerUserApi = async (userData) => {
    const { data } = await api.post("/register", userData);
    return data;
};

export const getUsersApi = async () => {
    const { data } = await api.get("/users");
    return data;
};
export const getGameData = async () => {
    const result = await extranalApi.get("/market/getImages");
    return result.status == 200 ? result.data : [];
};
export const getMarketMatchData = async () => {
    const result = await extranalApi.get("/market/matchData");
    return result.status == 200 ? result.data : [];
};

export const mainData = async (id) => {
    const result = await extranalApi.get(`/market/creativeV1/${id}?userId=670515811b1cd50efa7cda25`)
    return result.status == 200 ? result.data : [];
}
export const marketRawData = async () => {
    const result = await extranalApi.get(`/market/get-dummy-rate`)
    return result.status == 200 ? result.data : [];
}
