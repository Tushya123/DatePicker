// RecurrenceDates.js
import React from "react";
import { useDatePicker } from "../context/DatePickerContext";

const RecurrenceDates = () => {
  const { startDate, endDate, recurrencePattern, recurrenceDetails } = useDatePicker();

  const getParticularDayOfDate = (date) => {
    const dayIndex = date.getDay();
    const adjustedDayIndex = ((dayIndex + 6) % 7) + 1;
    return adjustedDayIndex;
  };
  console.log("noo",endDate)
  

  const renderRecurrenceDates = () => {
    const dates = [];
   
    if (startDate) {
      let currentDate = new Date(startDate);
      let enddate=endDate?endDate:new Date(startDate);
      
      while (currentDate <= enddate) {
        const currentDay = getParticularDayOfDate(currentDate);
        if (recurrenceDetails.specificDays.length > 0) {
          if (recurrenceDetails.specificDays.includes(currentDay)) {
            dates.push(new Date(currentDate));
          }
        } else {
          dates.push(new Date(currentDate));
        }

        // Increment based on the recurrence pattern
        switch (recurrencePattern) {
          case "daily":
            currentDate.setDate(
              currentDate.getDate() + parseInt(recurrenceDetails.interval)
            );
            break;
          case "weekly":
            currentDate.setDate(
              currentDate.getDate() + 7 * parseInt(recurrenceDetails.interval)
            );
            break;
          case "monthly":
            currentDate.setMonth(
              currentDate.getMonth() + parseInt(recurrenceDetails.interval)
            );
            break;
          case "yearly":
            currentDate.setFullYear(
              currentDate.getFullYear() + parseInt(recurrenceDetails.interval)
            );
            break;
          default:
            break;
        }
      }
    }

    return dates;
  };

  return renderRecurrenceDates();
};

export default RecurrenceDates;
