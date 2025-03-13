import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../store/newsSlice";
import NewsCard from "../components/NewsCard";
import "./Home.css"; // Importa il CSS per il componente Home

function Home() {
  const dispatch = useDispatch();
  const { articles, status, error } = useSelector((state) => state.news);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getNews());
    }
  }, [status, dispatch]);

  return (
    <div className="container">
      <h2 className="title">Latest News</h2> {/* Modificato il titolo in inglese */}

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      <div className="cardContainer">
        {articles.map((article, index) => (
          <NewsCard
            key={index}
            title={article.title}
            abstract={article.abstract}
            url={article.url}
            image={article.multimedia?.[0]?.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;