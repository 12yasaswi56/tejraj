import React from "react";
import Navbar from "../components/Navbar";

const CoAuthors = () => {
  return (
    <>
      <Navbar />
      <div style={styles.pageContainer}>
        <div style={styles.card}>
          <img 
            src="assests/co-authors.png" // Replace with your actual image path
            alt="Co-Author" 
            style={styles.image} 
          />
          
        </div>
      </div>
    </>
  );
};

const styles = {
  pageContainer: {
    fontFamily: "'Poppins', Arial, sans-serif",
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "30px",
    color: "#0073e6",
  },
  image: {
    backgroundColor: "#ffffff",
    padding: "200px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    display: "inline-block",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
//   image: {
//     width: "100%",
//     maxWidth: "400px",
//     borderRadius: "12px",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
//   },
  name: {
    fontSize: "24px",
    fontWeight: "600",
    marginTop: "15px",
    color: "#333",
  },
};

export default CoAuthors;

