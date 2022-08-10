import "dotenv/config";
import { ClientConfig, Pool } from "pg";
import express from "express";
import bcrypt from "bcrypt";

interface Registration {
  email: string;
  password: string;
}

const config: ClientConfig = {
  port: +process.env.PGPORT!,
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
};

const postGres = new Pool(config);
postGres.connect().then((res) => res);
postGres.query("Select * From users", (err, res) => {
  console.log(res.rows);
});

const server = express();
const port: number = Number(process.env.PORT) || 3000;

server.use(express.json());
server.use(express.text());

server.get("/api/user", (req, res) => {});

server.post("/api/user", async (req, res) => {
  const { email, password }: Registration = req.body;
  const hash = await bcrypt.hash(password, 10);

  postGres.query("Insert Into users(email, password) Values($1, $2)", [
    email,
    hash,
  ]);
  postGres.query("Select * From users", (err, res) => {
    console.log(res.rows);
  });

  res.status(200).send();
});

server.listen(port, () => console.log("Server is running on Port " + port));
