import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import diagnoseRouter from "./routes/diagnoses.route";
import patientRouter from "./routes/patients.route";

dotenv.config();

const app = express();
app.use(cors());

app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

app.use("/api/diagnoses", diagnoseRouter);
app.use("/api/patients", patientRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express server is listening on ${PORT}`);
});
