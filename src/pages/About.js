import React from "react";

const About = () => {
  return (
    <div className="page-container">
      <h1>About Me</h1>
      <p>
      Tejraj M. Aminabhavi is an Indian polymer scientist and academician. He served as a professor at Karnatak University and was the founder director of the Centre of Excellence in Polymer Science. With over four decades of research experience, he has made significant contributions to the fields of polymer science, material science, and membrane-based separations.

He obtained his PhD from Karnataka University and completed his post-doctoral work at the University of Texas at Austin. His research focuses on controlled drug delivery systems, membrane-based separation techniques, and polymer nanocomposites.
      </p>
      <div className="education">
        <h2>Education</h2>
        <ul>
          <li><strong>Ph.D. (Polymer Science)</strong>, University of Texas at Austin, USA (1975-1979)</li>
          <li><strong>M.Sc. (Physical Chemistry)</strong>, Karnatak University, India (1968-1970)</li>
          <li><strong>B.Sc. (Chemistry, Physics & Maths)</strong>, Karnatak College, India (1964-1968)</li>
          <li><strong>S.S.L.C.</strong>, Municipal High School, Gadag, India (1964)</li>
        </ul>
      </div>

      
      <div className="appointments">
        <h2>Academic Appointments</h2>
        <ul>
          <li><strong>Director of Research</strong>, Center for Energy & Environment, KLE Tech University (2021-Present)</li>
          <li><strong>Founder Director</strong>, Center of Excellence in Polymer Science, Karnatak University (2002-2007)</li>
          <li><strong>Professor</strong>, Physical Chemistry, Karnatak University (1995-2001)</li>
          <li><strong>Reader</strong>, Physical Chemistry, Karnatak University (1985-1994)</li>
          <li><strong>Lecturer</strong>, Physical Chemistry, Karnatak University (1982-1985)</li>
          <li><strong>Lecturer in Chemistry</strong>, Karnatak College, Dharwad (1970-1975)</li>
        </ul>
      </div>

    
      {/* Awards & Recognitions */}
<div className="highlights">
  <h2>Awards & Recognitions</h2>
  <ul>
    <li>Highly Ranked Scholar – Lifetime Highly Cited Researcher 2024 by Scholar GPS</li>
    <li>Top Cited Scholar by Scilit (2024, 2023)</li>
    <li>Research.com Chemistry in India Leader Award (2024, 2023, 2022)</li>
    <li>Dheemanta Sanmana Karnataka Rajyotsava, for Research in Chemistry, received by Hubli-Dharwad Municipal Corporation, India (Nov 2023)</li>
    <li>World ranked 548 for the year 2023, D-Index 105; India ranked #2</li>
    <li>Careers360 Faculty Research Awards in Chemistry (2023)</li>
    <li>Highly Cited Researcher (Top 1%) in the field of Cross-Field (2022, 2021)</li>
    <li>Diamond Jubilee Professor, Department of Chemistry, Karnatak University, Dharwad, India (2021)</li>
    <li>Dr. Raja Ramanna State Award for Scientists, Karnataka State Council for Science & Technology, Bangalore, India (2020)</li>
    <li>American Chemical Society - Three Year Honorary Membership Award (2015-2018)</li>
    <li>CIPET Award for Research in Polymer Science and Technology on “Polymers in Drug Delivery and Membrane Science,” Fourth National Award, Ministry of Fertilizers, Chemicals, and Petroleum, New Delhi, India (2014)</li>
    <li>Nikkei Asia Prize, Tokyo, Japan – Discipline: Applied Polymer Science, Technology & Innovation (2013)</li>
    <li>Laureate of 22nd Kwarizmi International Award (KIA) in Polymer Science, Tehran, Iran – Received from President of Iran (2009)</li>
    <li>Madurai Kamaraj University, Indian Science Award (2007)</li>
  </ul>
</div>

    </div>
  );
};

export default About;
