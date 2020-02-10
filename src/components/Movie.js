import React from "react";
import MovieInfo from "./MovieInfo";
import AvailableShowtimes from "./AvailableShowtimes";

function Movie(props) {
  return (
    <div className="ui container">
      <div className="ui two column grid">
        <div className="row">
          <div className="column">
            <MovieInfo
              title={props.movie.title}
              summary={props.movie.summary}
              image={props.movie.image}
            />
          </div>
          <div className="column">
            <AvailableShowtimes
              movie={props.movie}
              sessions={props.sessions}
              onSessionClick={props.onSessionClick}
            />
          </div>
        </div>
      </div>

      <div className="ui divider"></div>
    </div>
  );
}

export default Movie;
