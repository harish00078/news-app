// Business.js
import React from 'react';
import NewsCategory from '../pages/NewsCategory';
// import '../style/Business.css'; // Import the CSS file

const Business = () => {
  return (
    <div className="business-container">
      {/* <h2 className="business-title">Business News</h2> */}
      <NewsCategory category="business" className="business-news-list" />
    </div>
  );
};

export default Business;
