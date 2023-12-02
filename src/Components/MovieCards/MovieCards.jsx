import React,{useEffect, useState} from 'react';
import './MovieCards.css';
import axios from '../../axios';
import {imageUrl} from '../../constants/constants';


function MovieCards(props) {
  
  const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(props.urls).then((response)=>{
      console.log(response.data.results);
      setMovie(response.data.results);
    })

  }, [props.urls])
  
  return (
    <div className='cards'>
        <h2>{props.title}</h2>
            <div className="posters">
            {movie.map((obj,index)=>(
              <div>
              <img className={props.islarge ? 'largecard' : 'card'} src={imageUrl+ obj.backdrop_path} alt="posters" key={index}  />
              </div>
            ))}
                
                
            </div>
        
    </div>
  )
}

export default MovieCards