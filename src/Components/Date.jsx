import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Date() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <h2 className="w-full sm:w-1/3 text-left">DOB:</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date)=> {setSelectedDate(date)}} 
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
        isClearable
        className="border border-black p-2 flex-grow rounded-xl"
      />
    </div>
  );
}

export default Date;
