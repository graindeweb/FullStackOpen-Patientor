import diagnoses from "../../data/diagnoses";
import { Diagnose } from "../types/types";

export const getAllDiagnoses = (): Diagnose[] => {
  return diagnoses;
};
