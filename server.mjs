import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import applerouter from "./routes.mjs/appleroute.mjs";
import cors from "cors";

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
await mongoose.connect(process.env.MONGO_URI);

app.use(express.json());
app.use(cors(corsOptions));

app.use("/apples", applerouter);

app.get("/", (req, res) => {
  res.send("Welcome to the apples api");
});

app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
