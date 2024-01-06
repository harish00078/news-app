// src/News.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './News.css';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=efccb86fb1864231adee426846191b80'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }

        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Latest News about Tesla</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <Link to={`/news/${index}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
