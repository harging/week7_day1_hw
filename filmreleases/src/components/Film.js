import React from "react";

const Film = ({name, url}) => {

  return(
    <ul>
      <li><h4><a href={url}>{name}</a></h4></li>
    </ul>
  )

}

export default Film;