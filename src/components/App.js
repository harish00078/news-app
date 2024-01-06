import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import News from '../pages/News';
import DetailsNews from '../pages/NewsDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>React News App</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<News/>} />
            <Route path="/news/:index" element={<DetailsNews/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
