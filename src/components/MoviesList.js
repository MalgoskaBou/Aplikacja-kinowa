import React from "react";
import Movie from "./Movie";

function MoviesList(props) {
  const renderedList = props.movies.map(movie => {
    const matchingSessions = props.sessions.filter(session =>
      movie.sessions.includes(session.id)
    );
    const keyFromSessions = matchingSessions
      .map(session => session.id)
      .reduce((prev, next) => prev + next);
    return (
      <Movie
        key={movie.id + keyFromSessions}
        movie={movie}
        sessions={matchingSessions}
        onSessionClick={props.onSessionClick}
      />
    );
  });

  return <div className="ui container">{renderedList}</div>;
}

export default MoviesList;
