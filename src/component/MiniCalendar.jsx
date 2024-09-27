import React, { useState, useEffect } from 'react';

const MiniCalendar = ({ dates, startDate }) => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Initialize the currentMonth state to startDate if provided, else current date
  const [currentMonth, setCurrentMonth] = useState(() => 
    startDate ? new Date(startDate) : new Date()
  );

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Adjust first day to use Monday = 1, Sunday = 7
  const adjustedFirstDay = firstDayOfMonth === 0 ? 7 : firstDayOfMonth;

  const calendarDays = [];
  let dayCounter = 1;

  // Fill in the calendar grid
  for (let i = 0; i < 42; i++) {
    if (i < adjustedFirstDay - 1 || dayCounter > daysInMonth) {
      calendarDays.push(null); // Empty cell
    } else {
      calendarDays.push(dayCounter);
      dayCounter++;
    }
  }

  const isRecurringDate = (day) => {
    if (!day) return false;
    return dates.some(date => {
      return (
        date.getDate() === day &&
        date.getMonth() === month &&
        date.getFullYear() === year
      );
    });
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  return (
    <div className='mt-3 mini-bg'>
      <div className="flex justify-between items-center mb-2">
        <button onClick={handlePrevMonth} className="text-gray-600">&lt;</button>
        <span className=' font-bold md:text-2xl sm:text-xl'>
          {currentMonth.toLocaleString('default', { month: 'long' })} {year}
        </span>
        <button onClick={handleNextMonth} className="text-gray-600">&gt;</button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-xs md:text-md lg:text-base text-center font-bold">
            {day}
          </div>
        ))}
        {calendarDays.map((day, index) => (
          <button 
            type="button"
            key={index}
            className={`md:text-md text-xs lg:text-sm md:p-2 p-1 rounded-md text-center btn-hover ${
              isRecurringDate(day) ? 'bg-blue-200' : 'days-bg'
            }`}
          >
            {day || ''}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MiniCalendar;
