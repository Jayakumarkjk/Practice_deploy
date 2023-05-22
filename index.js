import express from "express";
import connectToDb from "./config/db.js";
import cors from "cors";



const app = express();

app.use(cors());
connectToDb();





app.get("/", (req, res) => {
    res.send("api is running");
  });

  app.listen(9000, () => {
    console.log(`Api is running on http://localhost:9000`);
  });