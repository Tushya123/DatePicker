import React from 'react';
import { useDatePicker } from '../context/DatePickerContext';

const RecurrenceOptions = () => {
  const {
    recurrencePattern,
    setRecurrencePattern,
    recurrenceDetails,
    setRecurrenceDetails,
  } = useDatePicker();

  return (

    <div className="">
      <h2 className="text-lg  font-semibold my-5">Recurrence Options:</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-2">
        <div className=''>
          <label className="block mb-1 py-1">Recurring Pattern:</label>
          <select
            value={recurrencePattern}
            onChange={(e) => setRecurrencePattern(e.target.value)}
            className="py-3 px-5 w-full border rounded-md mb-2"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 py-1">Frequecy:</label>
          <input
            type="number"
            value={recurrenceDetails.interval}
            onChange={(e) =>
              setRecurrenceDetails({
                ...recurrenceDetails,
                interval: e.target.value,
              })
            }
            className="py-3 px-5 w-full border rounded-md mb-2"
          />
        </div>
      </div>
      <label className="block font-semibold mb-3 mt-5">Specific Days of Week:</label>
      <div className="flex space-x-3 gap-2">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <label key={day} className='flex gap-2'>
            <input
              type="checkbox"
              onChange={(e) => {
                console.log("this", e.target.checked);
                const days = e.target.checked
                  ? [...recurrenceDetails.specificDays, index + 1]
                  : recurrenceDetails.specificDays.filter((d) => d !== index + 1);
                console.log("days", days);
                setRecurrenceDetails({ ...recurrenceDetails, specificDays: days });
                { console.log("this is :", days) }
              }}
            />
            {day}
          </label>
        ))}
      </div>


    </div>
  );
};

export default RecurrenceOptions;
