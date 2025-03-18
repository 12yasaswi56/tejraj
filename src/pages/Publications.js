import React, { useState } from "react";
import publicationsData from "../data/publications"; // Import data from separate file

const Publications = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const publicationsPerPage = 30;

  // Filtered publications based on search input
  const filteredPublications = publicationsData.filter((pub) =>
    pub.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPublications.length / publicationsPerPage);
  const startIndex = (currentPage - 1) * publicationsPerPage;
  const endIndex = startIndex + publicationsPerPage;
  const currentPublications = filteredPublications.slice(startIndex, endIndex);

  // Handle page change
  const goToNextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const goToPrevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="page-container">
      <h1>Publications</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search publications..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); // Reset to first page on search
        }}
        className="search-bar"
      />

      {/* Publications List */}
      <ul className="publications-list">
        {currentPublications.length > 0 ? (
          currentPublications.map((pub, index) => (
            <li key={index}>
              <strong>{pub.title}</strong> - {pub.year}  
              <br />
              {pub.doi && (
                <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                  DOI: {pub.doi}
                </a>
              )}
            </li>
          ))
        ) : (
          <p>No matching publications found.</p>
        )}
      </ul>

      {/* Pagination Controls */}
      {filteredPublications.length > publicationsPerPage && (
        <div className="pagination">
          <button onClick={goToPrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span> Page {currentPage} of {totalPages} </span>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Publications;
