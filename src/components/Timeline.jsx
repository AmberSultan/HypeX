import React from 'react';
import './Timeline.css'; 

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-time">{event.time}</div>
            <h6 className='timeline-heading'>{event.heading}</h6>
            <p className='timeline-p'>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
