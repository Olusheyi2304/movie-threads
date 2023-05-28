import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header_icon"
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
          />
        </Link>
        <Link to="/movies/all" style={{ textDecoration: "none" }}>
          <span>Trending </span>
        </Link>
        <Link to="/movies/movie" style={{ textDecoration: "none" }}>
          <span>Popular </span>
        </Link>
        <Link to="/movies/tv" style={{ textDecoration: "none" }}>
          <span> Tv Series</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
