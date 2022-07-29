import "dotenv/config";
import express from "express";

const server = express();
const port: number = Number(process.env.PORT) || 3000;

server.listen(port, () => console.log("Server is running on Port " + port));
