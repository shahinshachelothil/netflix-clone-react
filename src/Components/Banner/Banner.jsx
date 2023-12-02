import React,{useEffect,useState} from 'react';
import './Banner.css';
import axios from '../../axios';
import {apiKey, imageUrl} from '../../constants/constants';


function Banner() {

  const randomNumber = Math.floor(Math.random() * (10));
  const [movie, setMovie] = useState();
  
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((Response)=>{
        setMovie(Response.data.results[randomNumber]);
    })

    
  }, [randomNumber])
  
  return (
    <div className='banner' style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : null})`}}>
        <div className='content'>
            <h1 className="title">{movie ? movie.title : null}</h1>
            <div className="buttons">
                <button className="button">Play</button>
                <button className="button"> My List +</button>
            </div>
            <p className="discription">{movie ? movie.overview : null}</p>
        </div>
        <div className="fade-bottom">
            
        </div>
    </div>
  )
}

export default Banner