import React from "react";
import { useLocation, Link } from "react-router-dom";

const DetailPage = () => {
  const { state } = useLocation();
  
  if (!state) {
    return <p>No data available. Please go back to the homepage.</p>;
  }

  const { title, image, language, size, storyline } = state;

  return (
    <div className="container mt-4">
    <h1 className="text-start">{title}</h1>
    
    <img src={image} alt={title} className="d-block mx-0 mb-4" />

    <h3 className="text-start">Movies/Series Info:</h3>
    <p className="text-start"><strong>Language:</strong> {language || "Not available"}</p>
    <p className="text-start"><strong>Size:</strong> {size || "Not available"}</p>
    <p className="text-start"><strong>Storyline:</strong> {storyline}</p>
    
    <Link to="/" className="btn btn-primary mt-4">Go Back to Homepage</Link>
    <Link to="/form" className="btn btn-primary mt-4 mx-2">Book your Seat Now</Link>
  </div>
  );
};

export default DetailPage;
