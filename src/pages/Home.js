import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <img src="/assests/aminabhavi.png" alt="Prof. Aminabhavi" className="profile-img" />
        <h1>Prof. Tejraj M. Aminabhavi</h1>
        <p>Director of Research, Center for Energy & Environment</p>

        {/* Additional Titles & Positions */}
        <div className="titles">
          <p><strong>PhD</strong>, University of Texas at Austin, Texas, USA</p>
          <p><strong>Director of Research</strong>, Center for Energy & Environment, KLE Technological University, India</p>
          <p><strong>Diamond Jubilee Professor</strong>, Department of Chemistry, Karnatak University, India</p>
          <p><strong>Honorary Professor</strong>, Macquarie University, Sydney, Australia</p>
          <p><strong>Executive Editor</strong>, Chemical Engineering Journal (Elsevier, IF 15.1)</p>
        </div>
        <a href="/about" className="cta-button secondary">About Me</a>
        
      </div>

      {/* Quick Overview */}
      <div className="overview">
        <h2>Research Interests & Achievements</h2>
        <p>
          Internationally recognized **polymer scientist** with over <strong>950+ publications</strong>, 
          multiple national and international **awards**, and extensive research in 
          **Energy, Environment, and Polymer Science**. His work includes **Hydrogen production, 
          Carbon capture, Supercapacitors, Water purification, and Drug delivery systems.**
        </p>
        
        <a href="/publications" className="cta-button">See Publications</a>
      </div>

    
      <div className="research-expertise">
        <h2>Research Expertise</h2>
        <ul>
          <li><strong>Materials for Energy & Environment:</strong> Hydrogen production, Carbon capture, Supercapacitors, Water treatment.</li>
          <li><strong>Membrane Technology:</strong> Reverse osmosis, Biowaste mitigation, Capacitive deionization.</li>
          <li><strong>Pharmacy:</strong> Nanomedicine, Controlled release polymers, Drug delivery systems.</li>
          <li><strong>Theoretical Chemistry:</strong> Molecular modeling, Polymer thermodynamics.</li>
        </ul>
      </div>

      {/* Awards & Recognitions */}
      <div className="highlights">
        <h2>Awards & Recognitions</h2>
        <ul>
          <li><strong>2024:</strong> Highly Ranked Scholar – <strong>Lifetime Highly Cited Researcher</strong></li>
          <li><strong>2024:</strong> Top Cited Scholar by Scilit</li>
          <li><strong>2024:</strong> Research.com <strong>Chemistry Leader Award</strong> (India)</li>
          <li><strong>2023:</strong> World ranked **548**, India ranked **#2** in Chemistry Research</li>
          <li><strong>2023:</strong> Careers360 Faculty Research Awards in Chemistry</li>
          <li><strong>2022:</strong> Research.com <strong>Chemistry Leader Award</strong> (India)</li>
          <li><strong>2013:</strong> <strong>Nikkei Asia Prize</strong> - Applied Polymer Science</li>
          <li><strong>2009:</strong> <strong>22nd Kwarizmi International Award</strong> - Tehran, Iran</li>
          <li><strong>2007:</strong> Madurai Kamaraj University Science Award</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
