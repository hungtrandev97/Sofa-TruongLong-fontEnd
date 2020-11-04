import moment from "moment";
import {
  CHILD_STAGE,
  DATEFORMAT,
  ISODATEFORMAT,
  USER_SAMPLE_ROLES,
} from "../constants/DefaultValues";
/**
 *
 * @param {String} dateOfBirth format DD/MM/YYYY
 * @param {Number} userRole
 * @returns {Object} {age: number, unit: string}
 */
const getAgeUnitFromDate = ({ dateOfBirth, userRole }) => {
  const assignedValue = moment(dateOfBirth, DATEFORMAT, true);
  if (!assignedValue.isValid()) {
    return "";
  }
  const ageYear = moment().diff(
    moment(dateOfBirth, DATEFORMAT),
    "years",
    false
  );
  const unitYear = `year${ageYear > 1 ? "s" : ""}`;

  let result = `${ageYear} ${unitYear}`;

  if (userRole === USER_SAMPLE_ROLES.BABY) {
    const ageMonth = moment().diff(
      moment(dateOfBirth, DATEFORMAT),
      "months",
      false
    );
    if (ageMonth < 12) {
      const unitMonth = `month${ageMonth > 1 ? "s" : ""}`;
      result = `${ageMonth} ${unitMonth}`;
    } else {
      const month = ageMonth % 12;
      const unitYearBaby = `year${ageYear > 1 ? "s" : ""}`;
      const unitMonthBaby = `month${month > 1 ? "s" : ""}`;
      result = `${ageYear} ${unitYearBaby}`;
      if (month > 0) {
        result = `${ageYear} ${unitYearBaby} ${month} ${unitMonthBaby}`;
      }
    }
  }
  return result;
};

const isMom = ({ role }) =>
  role === USER_SAMPLE_ROLES.MOTHER || role === USER_SAMPLE_ROLES.MOTHER_TO_BE;

const getChildStage = ({ dateOfBirth, timePoint = "" }) => {
  if (timePoint && timePoint === "Year1") {
    return CHILD_STAGE.TODDLE;
  }
  const ageMonth = moment().diff(
    moment(dateOfBirth, ISODATEFORMAT),
    "months",
    false
  );
  if (ageMonth < 12) {
    return CHILD_STAGE.BABY;
  }
  if (ageMonth >= 12 && ageMonth < 12 * 3) {
    return CHILD_STAGE.TODDLE;
  }
  if (ageMonth >= 12 * 3) {
    return CHILD_STAGE.YOUNG;
  }
  // case admin, using time point
  return CHILD_STAGE.BABY;
};

// when can view report
// - baby not wean and complete metadata
// - baby wean and complete metadata and complete ffq
// - mother and complete metadata
// - mother-to-be and complete metadata and complete ffq
const isProfileCanViewReport = ({
  role,
  isCompletedMetadata = false,
  isCompletedFFQ = false,
  isBabyWeaned = null,
}) => {
  if (role === USER_SAMPLE_ROLES.MOTHER && isCompletedMetadata) {
    return true;
  }
  if (
    role === USER_SAMPLE_ROLES.MOTHER_TO_BE &&
    isCompletedMetadata &&
    isCompletedFFQ
  ) {
    return true;
  }
  if (
    role === USER_SAMPLE_ROLES.BABY &&
    isBabyWeaned === false &&
    isCompletedMetadata
  ) {
    return true;
  }
  if (
    role === USER_SAMPLE_ROLES.BABY &&
    isBabyWeaned !== false &&
    isCompletedMetadata &&
    isCompletedFFQ
  ) {
    return true;
  }
  return false;
};

export { getAgeUnitFromDate, isMom, getChildStage, isProfileCanViewReport };
