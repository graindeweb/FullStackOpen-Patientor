export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

type gender = "male" | "female" | "other";
export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: gender;
  occupation: string;
}

export type publicPatient = Omit<Patient, "ssn">;