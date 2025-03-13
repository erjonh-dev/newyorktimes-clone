import React from "react";
import "../styles/NewsCard.css";

function NewsCard({ title, abstract, url, image }) {
  return (
    <div className="news-card">
      {image ? (
        <img src={image} alt={title} className="news-image" />
      ) : (
        <div className="no-image">No image available</div>
      )}
      <h3 className="news-title">{title}</h3>
      <p className="news-abstract">{abstract}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="news-link">
        Read more
      </a>
    </div>
  );
}

export default NewsCard;