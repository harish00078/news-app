// NewsCategory.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsCategory = ({ category }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=efccb86fb1864231adee426846191b80`
        );
        setNews(response.data.articles);
        console.log(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="news-category">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} News</h2>
      <ul className="news-list">
        {news.map((article,index) => (
          <li key={article.url} className="news-item">
            <strong className="news-title">{article.title}</strong>
            <p className="news-description">{article.description}</p>
            <img src={article.urlToImage} alt="News" className="news-image" />
         
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCategory;
