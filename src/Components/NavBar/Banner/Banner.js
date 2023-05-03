import React, { useState } from 'react'
import { useEffect } from 'react'
import "./banner.css"
import axios from '../../../axios'
import {API_KEY,backImage} from '../../../constants/constants'




function Banner() {
  const [movie, setmovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((respons)=>{
      console.log(respons.data.results[0]);
      setmovie(respons.data.results[5])
     
      
    })
    

  },[])

  
  return (
    <div style={{backgroundImage:`url(${movie ? backImage+movie.backdrop_path :''})`}} className='banner'>
      
        <div className='content'>
            <h1 className='title'>{movie? movie.title:'Movie Name'}</h1>
             <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie? movie.overview :""} </h1>
        </div>
      <div className="fade_bottom"></div>
    </div>
  )
}


export default Banner
