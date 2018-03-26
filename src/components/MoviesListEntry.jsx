import React from 'react';

var MoviesListEntry = (props) => (
  <tr>
    <td>{props.movie.title}</td>
  </tr>
);

export default MoviesListEntry;