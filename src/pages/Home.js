import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../api/api";
import NewsCard from "../components/NewsCard";
import "./Home.css";

function Home() {
  const { data: articles = [], isLoading, isError, error } = useQuery({
  queryKey: ["news"],
  queryFn: () => fetchNews(),  
});


  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container">
      <h2 className="title">Latest News</h2>

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
