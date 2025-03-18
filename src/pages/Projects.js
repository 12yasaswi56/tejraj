import React, { useState } from "react";

const projects = [
  {
    title: "Hydrogen Storage Technologies",
    details: "Developing high-capacity and efficient hydrogen storage materials for renewable energy applications.",
  },
  {
    title: "Carbon Capture & Utilization",
    details: "Innovative membrane and adsorbent-based technologies to capture and utilize carbon emissions effectively.",
  },
  {
    title: "Polymer-Based Drug Delivery",
    details: "Designing nano-polymer systems for controlled drug release applications.",
  },
  {
    title: "Biowaste Mitigation & Membrane Science",
    details: "Developing polymeric membranes for biowaste treatment, water purification, and environmental sustainability.",
  },
  {
    title: "Electrochemical Energy Storage",
    details: "Research on advanced supercapacitors and nanomaterials for efficient energy storage solutions.",
  },
  {
    title: "Metal-Organic Frameworks for Waste Treatment",
    details: "Developing MOFs for microbial electrochemical systems for bioenergy generation and environmental remediation.",
  },
];

const assignments = [
  {
    title: "Plenary Speaker - 4th CMEE (2025)",
    details: "International Symposium on Carbon & Functional Materials for Energy & Environment, Bali, Indonesia.",
  },
  {
    title: "Plenary Speaker - CHEER2024 & WRE2024",
    details: "1st International Conference on Health, Environment, and Research, Tai Po Campus, Hong Kong.",
  },
  {
    title: "ACS Fall 2024 - Denver, USA",
    details: "Presenting research on per- and polyfluoroalkyl substances, hydrogen adsorption, and wastewater treatment.",
  },
  {
    title: "Plenary Speaker - SAiNTS 2024",
    details: "Conference on Carbon-Based Materials for Sustainable Energy, CHRIST University, Bengaluru, India.",
  },
  {
    title: "Plenary Speaker - 3rd CMEE 2024",
    details: "International Symposium on Carbon & Functional Materials, Vietnam.",
  },
  {
    title: "CEFIPRA - IRC Committee Member",
    details: "Serving as Indo-French Center Research Committee Member, New Delhi, India (2022 - Present).",
  },
  {
    title: "CSIR Research Funding Committee Member",
    details: "Active role in funding research projects (2020-2023).",
  },
  {
    title: "Director of Research, KLE Technological University",
    details: "Leading advanced research initiatives in energy and environment.",
  },
  {
    title: "Technology & Science Writer - Nikkei Asian Review",
    details: "Contributed to science communication (2013-2016).",
  },
  {
    title: "Workshop Organizer - Omics Group 4th Conference",
    details: "Co-organized international conference on novel drug delivery systems, San Antonio, Texas, USA.",
  },
];

const patents = [
  {
    title: "Ion Exchange Membranes - Part I",
    details: "US Patent #6814865 B1 (2004) - Development and applications of ion exchange membranes for industrial use.",
  },
  {
    title: "Ion Exchange Membranes - Part II",
    details: "US Patent #7442 US 2004 198849 AI 2004 1007 - Advanced processes for membrane applications.",
  },
  {
    title: "PAN-grafted PVA Pervaporation Membranes",
    details: "US Patent #7045062 B (2006) - Separation process improvement through polymeric membranes.",
  },
  {
    title: "Novel Copolymers for Drug Delivery",
    details: "Patent WO2010113176A2 (2010) - Controlled release delivery system for pharmaceuticals.",
  },
  {
    title: "Oral Insulin Delivery System",
    details: "Patent WO2010113177A3 (2010) - Controlled release oral insulin system for diabetes treatment.",
  },
  {
    title: "Poly(n-vinyl caprolactam-coacrylamide) Microparticles",
    details: "Patent WO2010089763A2 (2010) - Advanced microparticle system for controlled release applications.",
  },
  {
    title: "Risk-Free and Highly Stable Hyvis Hydrogen Storage Tank",
    details: "Patent 202441080835 (2024) - Advanced hydrogen storage system with high stability.",
  },
  {
    title: "High Capacity and Stable Hyvis Pro Hydrogen Storage Tank",
    details: "Patent 202441080836 (2024) - Next-generation hydrogen storage solutions for industrial use.",
  },
  {
    title: "Economical Integrated Hydrogen Production & Storage System",
    details: "Patent 202441080837 (2024) - Cost-effective integrated hydrogen storage and supply system.",
  },
  {
    title: "Highly Efficient Hydrogen Storage & Supply System",
    details: "Patent 202441080838 (2024) - Advanced technology for efficient hydrogen storage.",
  },
  {
    title: "Highly Efficient and Economical Hydrogen Production and Storage",
    details: "Patent 202441080839 (2024) - Innovative storage system for renewable hydrogen energy.",
  },
  {
    title: "High Efficiency and Stable Ammonia-Hydrogen Storage Tank",
    details: "Patent 202441087833 (2024) - Advanced system for ammonia and hydrogen fuel applications.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [selectedPatent, setSelectedPatent] = useState(null);

  return (
    <div className="page-container">
      <h1>Research Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => setSelectedProject(project)}>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="project-details">
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.details}</p>
          <button onClick={() => setSelectedProject(null)}>Close</button>
        </div>
      )}

      <h1>Recent Assignments</h1>
      <div className="project-grid">
        {assignments.map((assignment, index) => (
          <div key={index} className="project-card" onClick={() => setSelectedAssignment(assignment)}>
            <h3>{assignment.title}</h3>
          </div>
        ))}
      </div>
      {selectedAssignment && (
        <div className="project-details">
          <h2>{selectedAssignment.title}</h2>
          <p>{selectedAssignment.details}</p>
          <button onClick={() => setSelectedAssignment(null)}>Close</button>
        </div>
      )}

      <h1>Patents</h1>
      <div className="project-grid">
        {patents.map((patent, index) => (
          <div key={index} className="project-card" onClick={() => setSelectedPatent(patent)}>
            <h3>{patent.title}</h3>
          </div>
        ))}
      </div>
      {selectedPatent && (
        <div className="project-details">
          <h2>{selectedPatent.title}</h2>
          <p>{selectedPatent.details}</p>
          <button onClick={() => setSelectedPatent(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Projects;
