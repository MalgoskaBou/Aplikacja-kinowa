import React from "react";
import "./MovieInfo.css";

function MovieInfo({ title, summary, image, isVertical }) {
  if (isVertical) {
    return (
      <div className="ui grid">
        <div className="two column row">
          <div className="six wide column">
            <img className="ui small image" src={image} alt={title} />
          </div>
        </div>
        <div className="twelve wide column">
          <h4>{title}</h4>
          <p>{summary}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ui grid">
        <div className="two column row">
          <div className="six wide column">
            <img className="ui small image" src={image} alt={title} />
          </div>
          <div className="ten wide column">
            <h4>{title}</h4>
            <p>{summary}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieInfo;
