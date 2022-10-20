import express from "express";
import { getAllPatients } from "../services/patient.service";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(getAllPatients());
});

export default router;
