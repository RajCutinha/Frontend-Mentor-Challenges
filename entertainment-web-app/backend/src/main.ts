import "dotenv/config";
import { ClientConfig, Pool } from "pg";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

interface User {
  id?: string;
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

server.use(cors());
server.use(express.json());
server.use(cookieParser());

server.post("/api/user", (req, res) => {
  console.log("req:", req.cookies);
  console.log("get user");
  const { email, password }: User = req.body;

  postGres.query(
    "Select * From users Where email = $1",
    [email],
    (err, resPostgres) => {
      console.log(resPostgres.rows[0]);

      const checkPassword = bcrypt.compareSync(
        password,
        resPostgres.rows[0].password
      );

      if (checkPassword) {
        const { id, email } = resPostgres.rows[0];
        const user = { id, email };
        const fullUser = resPostgres.rows[0];
        const token = JWT.sign({ user }, process.env.JWTSECRET!);
        res
          .status(200)
          .cookie("token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 900000),
          })
          .json(fullUser);
        console.log(token);
      }

      console.log(checkPassword);
    }
  );
});

server.post("/api/users", async (req, res) => {
  const { email, password }: User = req.body;
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
