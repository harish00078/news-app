import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";

function App() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=efccb86fb1864231adee426846191b80'
        );

        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }

        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error.message);
        setError("Failed to fetch news. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={
                error ? (
                  <div className="error-message">{error}</div>
                ) : (
                  <News news={news} />
                )
              }
            ></Route>
            <Route
              path="/news/:index"
              element={<NewsDetail articles={news} />}
            ></Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
