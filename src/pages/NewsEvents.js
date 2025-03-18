import React from "react";

const events = [
  { year: "2024", details: "Plenary Speaker at ACS Fall 2024, Denver, USA." },
  { year: "2024", details: "International Conference on Scientific Advances in Natural Sciences & Techniques (SAiNTS - 2024), Bengaluru." },
  { year: "2023", details: "Ranked #2 in Chemistry Research (India, 2023)." },
];

const NewsEvents = () => {
  return (
    <div className="page-container">
      <h1>News & Events</h1>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-content">{event.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsEvents;
