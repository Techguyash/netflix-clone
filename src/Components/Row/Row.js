import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../../util/axios";
import "./Row.css";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ fetchUrl, title, isLargeRow }) => {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParam = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParam.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div className="row">
        <h2 class="row__title">{title}</h2>

        <div className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
