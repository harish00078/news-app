// src/NewsDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
// import './NewsDetail.css'; // Import the corresponding CSS file

const NewsDetail = ({ articles }) => {
  const { index } = useParams();
  const article = articles[index];

  if (!article) {
    return <div className="container">Article not found</div>;
  }

  return (
    <div className="container">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default NewsDetail;
