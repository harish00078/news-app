
import React from "react";
import { useParams } from "react-router-dom";
import "../style/NewsDetail.css";
import { Link } from "react-router-dom";

const NewsDetail = ({ articles }) => {
  const { index } = useParams();
  const article = articles[index];

  if (!article) {
    return <div className="container">Article not found</div>;
  }

  return (
    <div className="container">
      <h2>
        <Link to="/">Home-Page</Link>
       </h2>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <img src={article.urlToImage} alt="article get removed" />
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <h2 style={{ color: "royalblue" }}>
          More-About:- {article.source.name}
        </h2>
      </a>
    </div>
  );
};

export default NewsDetail;
