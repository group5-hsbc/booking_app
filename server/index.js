import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: `.env.local`, override: true });
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;
server.listen(PORT, () => {
  console.log(`Server running on ${BASE_URL}`);
});
