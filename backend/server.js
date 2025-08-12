// server.js
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" },
});

let users = {};

app.post("/register", (req, res) => {
    const { username, password, token } = req.body;
    if (!username || !password || !token) {
        return res.status(400).json({ status: false, message: "Missing fields" });
    }
    users[token] = { username, password };
    res.json({ status: true, message: "Registered", token });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const token = Object.keys(users).find(
        (t) => users[t].username === username && users[t].password === password
    );
    if (!token) return res.status(401).json({ status: false, message: "Invalid" });
    res.json({ status: true, token });
});

io.use((socket, next) => {
    const token = socket.handshake.auth?.token;
    if (!token || !users[token]) {
        return next(new Error("Invalid token"));
    }
    next();
});

io.on("connection", (socket) => {
    socket.emit("welcome", "Hello from server");

    socket.on("sendMessage", (msg) => {
        io.emit("receiveMessage", msg);
    });

    socket.on("disconnect", () => {
        console.log("❌ Disconnected:", socket.id);
    });
});

server.listen(5000, () => console.log("🚀 Server running on port 5000"));
