import React from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import DatePreview from './DatePreview';
// import { Container, Row, Col } from 'reactstrap';
import { useDatePicker } from '../context/DatePickerContext';

const DatePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useDatePicker();

  return (
    <>
      <div className=''>
        <div className='sm:p-3 md:p-5 lg:p-5'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>

          <div className="md:px-10 sm:px-1 m-2 py-7 shadow p-5 rounded-lg border-t-4  bg-white " >
            <h1 className="text-xl font-bold mb-4 py-2">Recurring Dates</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-2">
              <div className="mb-4 ">
                <label className="block mb-1">Start Date:</label>
                <input
                  type="date"
                  onChange={(e) => setStartDate(new Date(e.target.value))}
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">End Date:</label>
                <input
                  type="date"
                  onChange={(e) => setEndDate(new Date(e.target.value))}
                  className="w-full p-3 border rounded-md"
                />
              </div>
            </div>
            <RecurrenceOptions />

          </div>

          <div className='px-10 py-7 m-2 shadow p-5 rounded-lg border-t-4  bg-white '>
            <DatePreview />
          </div>

        </div>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
