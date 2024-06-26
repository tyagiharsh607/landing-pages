import React from "react";

const TimeSlot = () => {
  const thirtyMinSlots = [
    "7:00-8:00 AM",
    "7:00-8:00 AM",
    "7:00-8:00 AM",
    "7:00-8:00 AM",
    "7:00-8:00 AM",
    "7:00-8:00 AM",
    "7:00-8:00 AM",
    "7:00-8:00 AM",
    "7:00-8:00 AM",
    "7:00-8:00 AM",
  ];

  const oneHourSlots = ["7:00-8:00 AM", "10:00-11:00 PM", "7:00-8:00 AM"];
  return (
    <div className="time-slot-container">
      <div className="time-slots">
        <div className="slot-section">
          <div className="duration">
            <span className="clock-icon">🕐</span> 30 min
          </div>
          <div className="slots">
            {thirtyMinSlots.map((slot, index) => (
              <button
                key={index}
                className={`slot ${index % 4 === 3 ? "inactive" : ""}`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
        <div className="slot-section">
          <div className="duration">
            <span className="clock-icon">🕐</span> 01 hour
          </div>
          <div className="slots">
            {oneHourSlots.map((slot, index) => (
              <button
                key={index}
                className={`slot ${index === 2 ? "inactive" : ""}`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button className="payment-button"> Proceed Payment</button>
    </div>
  );
};

export default TimeSlot;
