import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEventStore } from '../store';
function Events() {
  const events = useEventStore((state) => state.events);
  const navigate = useNavigate();
  return (
    <div>
      <h1>All events</h1>
      {events.map((item) => (
        <p onClick={() => navigate(`/event/${item.id}`)} key={item.id}>
          {item.eventName}
        </p>
      ))}
    </div>
  );
}

export default Events;
