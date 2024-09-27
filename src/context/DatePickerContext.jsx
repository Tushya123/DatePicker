import React, { createContext, useContext, useState } from 'react';

const DatePickerContext = createContext();

export const DatePickerProvider = ({ children }) => {
  const [recurrencePattern, setRecurrencePattern] = useState('daily');
  const [recurrenceDetails, setRecurrenceDetails] = useState({
    interval: 1,
    specificDays: [],
  });
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <DatePickerContext.Provider
      value={{
        recurrencePattern,
        setRecurrencePattern,
        recurrenceDetails,
        setRecurrenceDetails,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};

export const useDatePicker = () => {
  return useContext(DatePickerContext);
};
