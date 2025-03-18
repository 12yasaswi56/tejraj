import React from "react";

const CV = () => {
  return (
    <div className="page-container">
      <h1>My CV</h1>
      <p>Download my full CV below:</p>
      <a href="/assests/aminabhavi.pdf" download className="cta-button">Download CV</a>
    </div>
  );
};

export default CV;
