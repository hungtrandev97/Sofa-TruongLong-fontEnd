/* eslint-disable no-unused-vars */
import React from "react";
import { string, oneOfType, func, instanceOf, number } from "prop-types";
import DatePicker from "react-date-picker";
import moment from "moment";
import "./FormikDatePicker.style.css";

const NAVIGATION_TYPE = {
  PREV: 1,
  PREV2: 2,
  NEXT: 3,
  NEXT2: 4,
};
const NavigationIcon = ({ type }) => {
  let imgUrl = "";
  switch (type) {
    case NAVIGATION_TYPE.PREV:
      imgUrl = "/img/calendar/calendar_prev.svg";
      break;
    case NAVIGATION_TYPE.PREV2:
      imgUrl = "/img/calendar/calendar_prev2.svg";
      break;
    case NAVIGATION_TYPE.NEXT:
      imgUrl = "/img/calendar/calendar_next.svg";
      break;
    case NAVIGATION_TYPE.NEXT2:
      imgUrl = "/img/calendar/calendar_next2.svg";
      break;
    default:
      imgUrl = "";
      break;
  }
  return <img width={24} height={24} src={imgUrl} alt={`${type}-icon`} />;
};
NavigationIcon.propTypes = {
  type: number.isRequired,
};

function FormikDatePicker({ name, value, onChange }) {
  const handleChange = (val) => {
    onChange(val);
  };
  return (
    <DatePicker
      name={name}
      className="FormikDatePicker"
      value={value}
      onChange={(val) => handleChange(val)}
      calendarType="ISO 8601"
      locale="en-EN"
      format="dd/MM/yyyy"
      maxDate={new Date()}
      clearIcon={null}
      calendarIcon={null}
      autoFocus
      calendarClassName="FormikDatePicker__Calendar"
      isOpen
      formatShortWeekday={(locale, date) => {
        const fullWeekday = moment(date).format("dddd");
        let weekDayDisplay = "";
        switch (fullWeekday) {
          case "Monday":
            weekDayDisplay = "Mon";
            break;
          case "Tuesday":
            weekDayDisplay = "Tue";
            break;
          case "Wednesday":
            weekDayDisplay = "Wed";
            break;
          case "Thursday":
            weekDayDisplay = "Thu";
            break;
          case "Friday":
            weekDayDisplay = "Fri";
            break;
          case "Saturday":
            weekDayDisplay = "Sat";
            break;
          case "Sunday":
            weekDayDisplay = "Sun";
            break;
          default:
            weekDayDisplay = "";
        }
        return weekDayDisplay;
      }}
      prev2Label={<NavigationIcon type={NAVIGATION_TYPE.PREV2} />}
      prevLabel={<NavigationIcon type={NAVIGATION_TYPE.PREV} />}
      nextLabel={<NavigationIcon type={NAVIGATION_TYPE.NEXT} />}
      next2Label={<NavigationIcon type={NAVIGATION_TYPE.NEXT2} />}
      navigationLabel={({ date, label, locale, view }) => {
        return <div>ABC</div>;
      }}
      onDrillDown={({ activeStartDate, view }) => {
        // eslint-disable-next-line no-alert
        alert("Drilled down to: ", activeStartDate, view);
      }}
      onDrillUp={null}
    />
  );
}

FormikDatePicker.propTypes = {
  name: string,
  value: oneOfType([string, instanceOf(Date)]),
  onChange: func,
};
FormikDatePicker.defaultProps = {
  name: "",
  value: "",
  onChange: () => {},
};

export default FormikDatePicker;
