// Technology.js
import React from 'react';
import NewsCategory from '../pages/NewsCategory';
// import '../style/Technology.css'; // Import the CSS file

const Technology = () => {
  return (
    <div className="technology-container">
      {/* <h2 className="technology-title">Technology News</h2> */}
      <NewsCategory category="technology" className="technology-news-list" />
    </div>
  );
};

export default Technology;
