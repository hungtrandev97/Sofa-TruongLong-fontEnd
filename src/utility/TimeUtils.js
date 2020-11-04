const timeAMPM = ({ timePoint }) => {
  const time = parseInt(timePoint, 10);
  if (timePoint < 12) return `${time}AM`;
  if (timePoint === 12) return `12PM`;
  if (timePoint > 12) return `${time - 12}PM`;
  return "";
};

const foo = () => "";
export { timeAMPM, foo };
