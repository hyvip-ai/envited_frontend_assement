import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

function DateTimeRange({ startDate, endDate, trigger }) {
  const { control } = useFormContext();
  return (
    <div className='date_range'>
      <Controller
        control={control}
        name={startDate}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div style={{ width: '45%' }}>
            <DatePicker
              showTimeSelect
              selected={value ? new Date(value) : null}
              onChange={(date) => {
                onChange(dayjs(date).toISOString());
                trigger(endDate);
                trigger(startDate);
              }}
              placeholderText='Start date and time'
            />
            {error ? <p>{error.message}</p> : <p></p>}
          </div>
        )}
      />

      <Controller
        control={control}
        name={endDate}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div style={{ width: '45%' }}>
            <DatePicker
              showTimeSelect
              selected={value ? new Date(value) : null}
              placeholderText='End date and time'
              onChange={(date) => {
                onChange(dayjs(date).toISOString());
                trigger(startDate);
                trigger(endDate);
              }}
            />
            {error ? <p>{error.message}</p> : <p></p>}
          </div>
        )}
      />
    </div>
  );
}

export default DateTimeRange;
