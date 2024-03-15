import React ,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
export default function MovieDetail() {
  const {id} = useParams();

  const [movie , setMovie] = useState([]);

    useEffect(()=>{
      fetch(`https://65f296f3034bdbecc76539e8.mockapi.io/api/workshop/movies/${id}`,{
        method:"GET",
      })
      .then((data) => data.json())
      .then((mv) => setMovie(mv))
    },[id]);
    const ratingStyle ={
      color:movie.rating >= 8.5 ? "green" : "red",
    };
  return (
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Po3jStA673E?si=0szJI0unbETyfyzP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="movie-details-container">
        <div class="movie-spec">
          <h2 class="movie-name">{movie.name}</h2>
          <h3 style = {ratingStyle} class="movie-rating">⭐{movie.rating} </h3>
        </div>
      </div>
    </div>
  )
}
