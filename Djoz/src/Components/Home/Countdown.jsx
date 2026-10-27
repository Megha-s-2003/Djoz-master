
import React, { useState, useEffect } from "react";

function Countdown() {
const festivalDate = new Date("2026-12-01T00:00:00").getTime();

  function calculateTimeLeft() {
    const difference = festivalDate - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
 

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearInterval(timer);
}, []);

const countdownItems = [
  { label: "DAYS", value: timeLeft.days },
  { label: "HOURS", value: timeLeft.hours },
  { label: "MINUTES", value: timeLeft.minutes },
  { label: "SECONDS", value: timeLeft.seconds },
];
  return (
    <section className="countdown spad">
      <div className="countdown__overlay">
        <div className="countdown__container">
          <div className="countdown__text">
            <h1>Tomorrowland 2020</h1>
            <h4>Music festival start in</h4>
          </div>

          <div className="countdown__timer">
            {countdownItems.map((item) => (
              <div className="countdown__item" key={item.label}>
                <span>{String(item.value).padStart(2, "0")}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div className="buy__tickets">
            <a href="/contact" className="primary-btn">
              BUY TICKETS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
