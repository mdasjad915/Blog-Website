import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

import Connection from "./database/db.js";
import Route from "./routes/route.js";

const app = express();
dotenv.config({ path: './config.env' });

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Route);

const PORT = 8000;

app.listen(PORT, () =>
  console.log(`Server running successfully on PORT ${PORT}`)
);

const URL = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

Connection(URL);
