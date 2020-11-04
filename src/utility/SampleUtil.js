/* eslint-disable prefer-destructuring */
import _ from "lodash";
import {
  SAMPLE_TYPES,
  DELIVERY_MODE,
  USER_SAMPLE_ROLES,
} from "../constants/DefaultValues";

const COLORS = [
  "#915BA6",
  "#F98B54",
  "#C6E783",
  "#F572A8",
  "#D06BB8",
  "#FFE42E",
  "#27BEB6",
  "#EE2F44",
  "#67bf6b",
  "#EF4924",
  "#518BC9",
  "#F4AE1A",
];

// private
const getShortName = ({ fullName, isCutNumber = true }) => {
  const bactNames = fullName.split("_");
  let lastName = bactNames.slice(-1).pop();
  if (
    fullName !== "dtBactOthers" &&
    fullName !== "Others" &&
    (lastName.toLowerCase() === "other" || lastName.toLowerCase() === "others")
  ) {
    lastName = bactNames[2];
  } else if (lastName.toLowerCase() === "uncult") {
    lastName = bactNames.slice(2, bactNames.length - 1).join(" ");
  } else if (fullName === "dtBactOthers") {
    lastName = "Others";
  }

  if (lastName === "Tyzzerella 4" && isCutNumber) {
    lastName = "Tyzzerella";
  }
  return lastName;
};
const transformCompositionData = ({ data }) => {
  const composition = [];
  let indexColor = 0;

  // sort desc, exclude Others
  const otherBact = data.filter((bact) => bact.name === "dtBactOthers");
  let transformCompositionBacts = data.filter(
    (bact) => bact.name !== "dtBactOthers"
  );
  transformCompositionBacts = _.sortBy(transformCompositionBacts, ["value"]);
  transformCompositionBacts = _.reverse(transformCompositionBacts);
  if (otherBact && otherBact.length > 0) {
    transformCompositionBacts.push(otherBact[0]);
  }

  transformCompositionBacts.forEach((bact) => {
    const item = {};
    item.value = parseFloat(bact.value);
    item.color = COLORS[indexColor];
    if (indexColor === COLORS.length - 1) indexColor = 0;
    indexColor += 1;
    item.fullName = bact.name;
    item.name = getShortName({ fullName: bact.name });
    item.fullValue = bact.value;
    item.value = parseFloat((bact.value * 100).toFixed(2));
    composition.push(item);
  });
  return composition;
};

const transformComparisonData = ({ comparisonBacts, sample, member }) => {
  const comparison = [];
  let indexColor = 0;
  const otherBact = comparisonBacts.filter((bact) => bact.name === "Others");
  let bactsTransform = comparisonBacts.filter((bact) => bact.name !== "Others");
  bactsTransform = _.sortBy(bactsTransform, [
    sample.sampleType === SAMPLE_TYPES.INFANT_STOOL &&
    member.deliveryMode !== DELIVERY_MODE.VD
      ? "avgVDValue"
      : "avgDBValue",
  ]); // asc
  bactsTransform = _.reverse(bactsTransform);
  if (otherBact && otherBact.length > 0) {
    bactsTransform.push(otherBact[0]);
  }

  bactsTransform.forEach((bact) => {
    const item = { ...bact };
    item.fullName = bact.name;
    item.name = getShortName({ fullName: bact.name });
    item.color = COLORS[indexColor];
    if (indexColor === COLORS.length - 1) indexColor = 0;
    indexColor += 1;
    comparison.push(item);
  });

  return comparison;
};

const transformSummaryData = ({ summaryData, comparisonData }) => {
  let transformBacts = comparisonData.filter(
    (bact) => bact.name !== "dtBactOthers"
  );
  transformBacts = _.sortBy(transformBacts, ["value"]);
  transformBacts = _.reverse(transformBacts);
  const result = [];
  summaryData.forEach((item) => {
    const newItem = { ...item };
    const availableBact = _.find(
      transformBacts,
      (o) =>
        getShortName({ fullName: o.name, isCutNumber: false }) ===
        item.bacteriaName
    );
    if (availableBact) {
      newItem.value = availableBact.yourValue;
      newItem.name = item.bacteriaName;
      result.push(newItem);
    }
  });
  return result;
};

const isBabyVD = ({ member }) => {
  return (
    member &&
    member.role &&
    member.role === USER_SAMPLE_ROLES.BABY &&
    member.deliveryMode &&
    member.deliveryMode === DELIVERY_MODE.VD
  );
};

const getTimePointHumanString = ({ timePoint }) => {
  let rTimePoint = "";
  switch (timePoint) {
    case "D190":
      rTimePoint = "190 days";
      break;
    case "Month1":
      rTimePoint = "one month";
      break;
    case "Month3":
      rTimePoint = "3 months";
      break;
    case "Week1":
      rTimePoint = "one week";
      break;
    case "Week36":
      rTimePoint = "36 weeks";
      break;
    case "Week37":
      rTimePoint = "37 weeks";
      break;
    case "Year1":
      rTimePoint = "one year";
      break;
    default:
      rTimePoint = "";
      break;
  }
  return rTimePoint;
};

export {
  transformCompositionData,
  transformComparisonData,
  transformSummaryData,
  isBabyVD,
  getTimePointHumanString,
};
