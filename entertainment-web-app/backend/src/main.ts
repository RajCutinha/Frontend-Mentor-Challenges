import "dotenv/config";
import { ClientConfig } from "pg";
import express from "express";

const config: ClientConfig = {
  port: +process.env.PGPORT!,
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
};

const server = express();
const port: number = Number(process.env.PORT) || 3000;

server.listen(port, () => console.log("Server is running on Port " + port));
