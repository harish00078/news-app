// Home.js
import React from 'react';
import NewsCategory from '../pages/NewsCategory';
// import '../style/Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Top Headlines</h2>
      <NewsCategory category="" className="home-news-list" />
    </div>
  );
};

export default Home;
