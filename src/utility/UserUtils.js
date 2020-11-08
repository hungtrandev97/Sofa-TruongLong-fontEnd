import {
  USER_GENDERS,
  GBS_MOTHER,
  DELIVERY_MODE,
  MILK_FEEDING,
  WEANING_STATUS,
  SAMPLE_TYPES,
  USER_SAMPLE_ROLES,
} from "../constants/DefaultValues";

const getGenderStr = (gender) => {
  let result = "";
  switch (gender) {
    case USER_GENDERS.FEMALE:
      result = "Female";
      break;
    case USER_GENDERS.MALE:
      result = "Male";
      break;
    case USER_GENDERS.OTHERS:
      result = "Others";
      break;
    default:
      result = "";
      break;
  }
  return result;
};

const getGBSMotherStr = (gbs) => {
  let result = "";
  switch (gbs) {
    case GBS_MOTHER.NEGATIVE:
      result = "Negative";
      break;
    case GBS_MOTHER.POSITIVE:
      result = "Positive";
      break;
    case GBS_MOTHER.UNKNOWN:
      result = "Unknown";
      break;
    default:
      result = "";
      break;
  }
  return result;
};

const getDeliveryStr = (mode) => {
  let result = "";
  switch (mode) {
    case DELIVERY_MODE.VD:
      result = "VD";
      break;
    case DELIVERY_MODE.C_Section:
      result = "C-section";
      break;
    case DELIVERY_MODE.VD_IAP:
      result = "VD_IAP";
      break;
    default:
      result = "";
      break;
  }
  return result;
};

const getFullDeliveryStr = (mode) => {
  let result = "";
  switch (mode) {
    case DELIVERY_MODE.VD:
      result = "Vaginal birth";
      break;
    case DELIVERY_MODE.C_Section:
      result = "C-section birth";
      break;
    case DELIVERY_MODE.VD_IAP:
      result = "Vaginal birth with intrapartum antibiotic prophylaxis";
      break;
    default:
      result = "";
      break;
  }
  return result;
};

const getMilkFeedingStr = (mode) => {
  let result = "";
  switch (mode) {
    case MILK_FEEDING.MIXED_BF:
      result = "Mixed_BF";
      break;
    case MILK_FEEDING.MIXED_FED:
      result = "Mixed_Fed";
      break;
    case MILK_FEEDING.MIXED_FF:
      result = "Mixed_FF";
      break;
    case MILK_FEEDING.ND:
      result = "ND";
      break;
    case MILK_FEEDING.OTHERS:
      result = "Others";
      break;
    case MILK_FEEDING.SOLELY_BF:
      result = "SolelyBF";
      break;
    case MILK_FEEDING.SOLELY_FF:
      result = "SolelyFF";
      break;
    default:
      result = "NA";
      break;
  }
  return result;
};

const getWeaningStatusStr = (mode) => {
  let result = "";
  switch (mode) {
    case WEANING_STATUS.BEFORE:
      result = "Before";
      break;
    case WEANING_STATUS.AFTER:
      result = "After";
      break;
    default:
      result = "NA";
      break;
  }
  return result;
};

const getSampleTypeStr = (mode) => {
  let result = "";
  switch (mode) {
    case SAMPLE_TYPES.HIGH_VAGINAL:
      result = "High vaginal";
      break;
    case SAMPLE_TYPES.HUMAN_MILK:
      result = "Human milk";
      break;
    case SAMPLE_TYPES.INFANT_SALIVA:
      result = "Infant saliva";
      break;
    case SAMPLE_TYPES.INFANT_STOOL:
      result = "Infant stool";
      break;
    case SAMPLE_TYPES.LOW_VAGINAL:
      result = "Low vaginal";
      break;
    case SAMPLE_TYPES.MOTHER_SALIVA:
      result = "Mother saliva";
      break;
    case SAMPLE_TYPES.MOTHER_STOOL:
      result = "Mother stool";
      break;
    case SAMPLE_TYPES.OTHERS:
      result = "others";
      break;

    default:
      result = "others";
      break;
  }
  return result;
};

const getMemberRoleStr = (role) => {
  let result = "";
  switch (role) {
    case USER_SAMPLE_ROLES.MOTHER:
      result = "Mother";
      break;
    case USER_SAMPLE_ROLES.BABY:
      result = "Baby";
      break;
    default:
      result = "";
      break;
  }
  return result;
};

export {
  getGenderStr,
  getGBSMotherStr,
  getDeliveryStr,
  getFullDeliveryStr,
  getMilkFeedingStr,
  getWeaningStatusStr,
  getSampleTypeStr,
  getMemberRoleStr,
};
