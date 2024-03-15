import React, { useState } from "react";
import Counter from "./Counter";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import InfoIcon from "@mui/icons-material/Info";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Movie({ movieTake,getMovies}) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const deleteMovie = (id) =>{
    // console.log(id);
    fetch(`https://65f296f3034bdbecc76539e8.mockapi.io/api/workshop/movies/${id}`,{
      method:"DELETE",
    })
    .then(()=>getMovies())
    .then(()=>alert("This card will be deleted now."))
  };
  return (
    <Card sx={{ maxWidth: 345 }} className="movie-container">
      <CardMedia
        sx={{ height: 250 }}
        image={movieTake.poster}
        title="Leo Poster"
      />
      <CardContent className="movie-details">
        <h2 className="movie-name">
          {movieTake.name}
          <IconButton
            color="primary"
            aria-label="Toggle-Description"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <ExpandLessIcon fontSize="large" />
            ) : (
              <ExpandMoreIcon fontSize="large" />
            )}
          </IconButton>
          <IconButton color="primary" aria-label="movie-info" onClick={() => navigate(`/portal/view/${movieTake.id}`)}>
            <InfoIcon fontSize="medium" />
          </IconButton>
        </h2>
        <h3 className="movie-rating">{movieTake.rating}🔥</h3>
      </CardContent>
      {show ? <p className="movie-summary">{movieTake.summary}</p> : null}
      <CardActions>
        <Counter />
        <IconButton sx={{marginLeft:"auto"}} aria-label="editMovie" onClick={()=>navigate(`/portal/edit/${movieTake.id}`)}>
          <EditIcon color="secondary"></EditIcon>
        </IconButton>
        <IconButton sx={{marginLeft:"auto"}} aria-label="editMovie">
          <DeleteIcon color="secondary" onClick={()=>deleteMovie(movieTake.id)}></DeleteIcon>
        </IconButton>
      </CardActions>
    </Card>
  );
}
