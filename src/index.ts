import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./endpoints";

import axios from "axios";

dotenv.config();
const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/v1", router);

//? Testing
axios.get("http://localhost:8080/api/v1/");

// TODO - Add Root Handler
// TODO - Add 404 Page

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
