import React from 'react';
import { BiMap, BiChevronRight } from 'react-icons/bi';
function DetailAddress({ address }) {
  return (
    <div className='detail_date mb-3'>
      <div className='icon icon_box'>
        <BiMap color='#8456EC' />
      </div>
      <div className='text'>
        <b>{address.split(',')[0]}</b> <br />
        {address.split(',').slice(1).join(', ')}
      </div>
      <div className='icon'>
        <BiChevronRight color='#BDBDBD' />
      </div>
    </div>
  );
}

export default DetailAddress;
