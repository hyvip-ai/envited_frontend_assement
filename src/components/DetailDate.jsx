import React from 'react';
import { BiCalendar, BiChevronRight } from 'react-icons/bi';
import dayjs from 'dayjs';
function DetailDate({ startDate, endDate }) {
  return (
    <div className='detail_date mb-3'>
      <div className='icon icon_box'>
        <BiCalendar color='#8456EC' />
      </div>
      <div className='text'>
        <b>{dayjs(startDate).format('ddd, MMM D, YYYY h:mm A')}</b> <br />
        to <b>{dayjs(endDate).format('ddd, MMM D, YYYY h:mm A')}</b>
      </div>
      <div className='icon'>
        <BiChevronRight color='#BDBDBD' />
      </div>
    </div>
  );
}

export default DetailDate;
