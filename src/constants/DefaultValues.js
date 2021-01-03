export const ROLE = {
  ADMIN: 1,
  PATIENT: 2,
};
export const TOATS_CLOSE_TIME = 3002;

/** SERVER */
export const END_POINT = "http://localhost:3002";
// export const END_POINT = "http://192.168.1.155:3002";
// export const END_POINT = "http://192.168.1.164:3002";
// export const END_POINT = "http://103.15.50.89:4003";
/** COMMON */
export const PAGE_SIZE = 5;
export const PAGE_SIZE_50 = 50;
export const ACCESS_TOKEN_KEY = "ACCESS_TOKEN_KEY";
export const ISODATEFORMAT = "YYYY-MM-DDTHH:mm:ss.SSSZ";
export const DATEFORMAT = "DD/MM/YYYY";
/** END COMMON */

// Regex
export const PHONE_REG = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const POSTAL_CODE_REG = /^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/;
export const WEIGHT_KG_REG = /^(?!0\d|$)\d{1,3}(\.\d{1,2})?$/;
export const HEIGHT_M_REG = /^(?!0\d|$)\d{1,1}(\.\d{1,2})?$/;
export const HEIGHT_CM_REG = /^(?!0\d|$)\d{1,3}(\.\d{1,2})?$/;

export const VACCINATION = {
  TUBERCULOSIS_BCG: "TUBERCULOSIS_BCG", // Tuberculosis (BCG)
  HEPATITIS_B: "HEPATITIS_B", // Hepatitis B
  DTaP: "DTaP", // Diphteria-Tetanus-Pertussis (DTaP)
  POLIOVIRUS: "POLIOVIRUS", // Poliovirus
  Hib: "Hib", // Haemophilus influenza type b (Hib)
  MMR: "MMR", // Measles-Mumps-Rubella (MMR)
  PCV: "PCV", // Pneumococcal Disease (PCV)
};

export const RACE_OPTS = [
  { label: "Arabs", value: "Arabs" },
  { label: "Bangladeshi", value: "Bangladeshi" },
  { label: "Caucasian", value: "Caucasian" },
  { label: "Chinese", value: "Chinese" },
  { label: "Eurasian", value: "Eurasian" },
  { label: "Filipino", value: "Phillipino" },
  { label: "Indian", value: "Indian" },
  { label: "Indonesian", value: "Indonesian" },
  { label: "Japanese", value: "Japanese" },
  { label: "Korean", value: "Korean" },
  { label: "Malay", value: "Malay" },
  { label: "Nepalese", value: "Nepalese" },
  { label: "Pakistani", value: "Pakistani" },
  { label: "Sinhalese", value: "Sinhalese" },
  { label: "Thai", value: "Thai" },
  { label: "Vietnamese", value: "Vietnamese" },
  { label: "Others", value: "Others" },
];

export const FromAcount = {
  LOGIN: 1,
  REGISTER: 2,
};

// notify
export const TYPE_NOTIFY = {
  SUCCESS: 1,
  WARNING: 2,
  ERROR: 3,
};

export const FromCategory = {
  CREATE: 1,
  EDIT: 2,
};
export const FromProduct = {
  CREATE: 1,
  EDIT: 2,
};
