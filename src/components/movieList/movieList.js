import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";

const MovieList = () => {
  const [movieList, setMoviesList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/${
        type ? type : "tv"
      }/day?api_key=48fc74965262386873af4a22840abbe2&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMoviesList(data.results));
  };

  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "ALL").toUpperCase()}</h2>
      <div className="list_cards">
        {movieList.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
