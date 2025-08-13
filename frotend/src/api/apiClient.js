import axios from "axios";
import { decryptData } from "../utils/cryptoUtils";

const auth = import.meta.env.VITE_AUTHORIZATION_KEY;

const api = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        identity: "sG6eDcsG6eDcQeecx9QO1dBsOhepUkOchh+LO57xB6Sk8w1lG8cOsGVut78/eiAn/t",
        referer: "http://localhost:3000/",
        authorization: auth,
    },
});

export const extranalApi = axios.create({
    baseURL: "https://server.dreamz247.com/api/v1",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: auth,
        identity: "sG6eDcsG6eDcQeecx9QO1dBsOhepUkOchh+LO57xB6Sk8w1lG8cOsGVut78/eiAn/t",
    },
});

api.interceptors.request.use((config) => {
    const encryptedToken = localStorage.getItem("token");
    if (encryptedToken) {
        try {
            config.headers["Authorization"] = auth;
        } catch (error) {
            console.error("Failed to decrypt token for internal API:", error);
        }
    }
    return config;
});

extranalApi.interceptors.request.use((config) => {
    const encryptedToken = localStorage.getItem("token");
    if (encryptedToken) {
        try {
            config.headers["Authorization"] = auth;
        } catch (error) {
            console.error("Failed to decrypt token for external API:", error);
        }
    }
    return config;
});

export default api;
