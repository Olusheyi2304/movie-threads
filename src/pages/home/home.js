import React, { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=48fc74965262386873af4a22840abbe2&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);
  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movies) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`movie/${movies.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movies && movies.backdrop_path
                  }`}
                />
              </div>
              <div className="posterImage_overlay">
                <div className="posterImage_title">
                  {movies ? movies.original_title : ""}
                </div>
                <div className="posterImage_runtime">
                  {movies ? movies.genre : ""}
                  <span className="posterImage_rating">
                    {movies ? movies.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage_description">
                  {movies ? movies.overview : " "}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
    </>
  );
};

export default Home;
