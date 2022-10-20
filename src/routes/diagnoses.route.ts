import express from "express";
import { getAllDiagnoses } from "../services/diagnose.service";
import { Diagnose } from "../types/types";

const router = express.Router();

router.get("/", (_req, res) => {
  const diagnoses: Diagnose[] = getAllDiagnoses();
  res.json(diagnoses);
});

export default router;
