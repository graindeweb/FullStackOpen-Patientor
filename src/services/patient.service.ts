import patients from "../../data/patients";
import { publicPatient } from "../types/types";

export const getAllPatients = (): publicPatient[] => {
  return patients.map(
    ({ id, name, dateOfBirth, gender, occupation }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
    })
  );
};
