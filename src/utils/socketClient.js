import { io } from "socket.io-client";
import { decryptData } from "./cryptoUtils";

let socket;

export const connectSocket = () => {
    const encryptedToken = localStorage.getItem("token");
    if (!encryptedToken) return;

    const token = decryptData(encryptedToken);
    console.log("🚀 ~ connectSocket ~ token:", token)
    socket = io("http://localhost:5000", {
        auth: { token },
    });

    socket.on("connect", () => {
        console.log("✅ Socket connected:", socket.id);
    });

    socket.on("welcome", (msg) => {
        console.log("📩 Server says:", msg);
    });

    socket.on("receiveMessage", (msg) => {
        console.log("📨 New message:", msg);
    });

    socket.on("disconnect", () => {
        console.log("❌ Socket disconnected");
    });

    socket.on("connect_error", (err) => {
        console.error("❌ Socket error:", err.message);
    });
};

export const sendMessage = (msg) => {
    if (socket) socket.emit("sendMessage", msg);
};
