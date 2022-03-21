import React from 'react'
import '../film.css'
import { Link } from 'react-router-dom';

const Film=({Title,Year,Released,Director,imdbRating,imdbID,Images,link,Poster,id})=>{


  return (
<div>
{/* // a�a��da link vermeden �nce bunu routelaman laz�m. app.jsde veya ba�ka yerde. */}
{/* her bir film i�in */}
<Link to={`/films/${id}`} style={{ textDecoration: "none",color:"white"}}>

    <div className='film rounded-float card shadow-lg'>
    <header>
        <div className='filmname'>{Title}</div>
        <div><h4>{Director}</h4></div>
    </header>
    <img src={Poster} width="100%"  height="320px" className='rounded float' ></img>

    <div>

    </div>
   
</div>

    </Link>
    
    </div>

  )
}

export default Film