import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Select start date"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="Select end date"
      />
    </div>
  );
};

export default DateRangePicker;
