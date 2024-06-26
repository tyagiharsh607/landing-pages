import React from 'react'

const Slots = () => {
  return (
    <div className='slots'>
      <h2>Available Slots</h2>
      <div className="consulting-calendar">
        <div className="consulting-types">
          <span className="consulting-type active">Startup Consulting</span>
          <span className="consulting-type">Career Consulting</span>
        </div>
        <div className="calendar-nav">
          <button className="nav-button prev">&#10094;</button>
          <div className="dates">
            <div className="date-item active">
              <div className="day">Today</div>
              <div className="availability">08 Available</div>
            </div>
            <div className="date-item">
              <div className="day">Tomorrow</div>
              <div className="availability">06 Available</div>
            </div>
            <div className="date-item">
              <div className="day">Sat 1,May</div>
              <div className="availability">06 Available</div>
            </div>
          </div>
          <button className="nav-button next">&#10095;</button>
        </div>
      </div>
    </div>
  );
}

export default Slots
