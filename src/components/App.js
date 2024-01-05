// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from '../pages/News';
import NewsDetail from '../pages/NewsDetail';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=tesla&from=2023-12-05&sortBy=publishedAt&apiKey=efccb86fb1864231adee426846191b80'
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
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/news/:index" element={  <NewsDetail articles={news} />}/>
            
         
            <Route path="/" element={<News />}/>
       
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
