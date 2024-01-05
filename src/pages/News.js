
import { Link } from "react-router-dom";
import "../style/News.css";

const News = ({ news }) => {
  return (
    <div className="container">
      <h2>Latest News about Tesla</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <img src={article.urlToImage} alt="article get removed" />
            <Link to={`/news/${index}`}>
              <h2 style={{ color: "royalblue" }}>
                More-About:- {article.source.name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
