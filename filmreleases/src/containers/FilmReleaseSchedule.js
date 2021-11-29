import React, {useState} from "react";
import FilmReleases from "../components/FilmReleases";

const FilmReleaseSchedule = () => {

  const [films, setFilms] = useState(
    [
        {
          id: 1,
          name: "Resident Evil: Welcome to Raccoon City",
          url: "https://www.imdb.com/title/tt6920084/?ref_=rlm"
        },
        {
          id: 2,
          name: "Silent Night",
          url: "https://www.imdb.com/title/tt11628854/?ref_=rlm"
        },
        {
          id: 3,
          name: "C'mon C'mon",
          url: "https://www.imdb.com/title/tt10986222/?ref_=rlm"
        },
        {
          id: 4,
          name: "Boxing Day", 
          url: "https://www.imdb.com/title/tt13659918/?ref_=rlm"
        },
        {
          id: 5,
          name: "Blue Bayou",
          url: "https://www.imdb.com/title/tt11121664/?ref_=rlm"
        }
      ]
  )

  return (
    <>
      <h1>Upcoming Film Releases for UK</h1>
      <hr></hr>
      <FilmReleases films={films} />
      <hr></hr>
      <a href="https://www.imdb.com/calendar/?region=gb"><h1>View more upcoming releases >>></h1></a>
    </>
  );

}

export default FilmReleaseSchedule;