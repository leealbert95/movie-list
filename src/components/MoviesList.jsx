import React from 'react';
import MoviesListEntry from './MoviesListEntry.jsx';

var MoviesList = (props) => {
  console.log(props.movies)
  return (
    <div className="row">
      <div className="col-md-3"/>
      <div className="col-md-6 movies-container">
        <table className="table movies-table">
          <tbody>
            {props.movies.map((movie) => 
              <MoviesListEntry movie={movie}/>
            )}
          </tbody>
        </table>
      </div>
      <div className="col-md-3"/>
    </div>
  );
};

export default MoviesList;