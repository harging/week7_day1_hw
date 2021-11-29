import React from "react";
import Film from "./Film";

const FilmReleases = ({films}) => {

  const filmArray = films.map(film => {
    return (
      <Film name={film.name} key={film.id} url={film.url}></Film>
    );
  });

  return(
    <>
      {filmArray}
    </>
  )

}

export default FilmReleases;