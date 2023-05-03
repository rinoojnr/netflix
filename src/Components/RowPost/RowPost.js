import axios from '../../axios'
import React from 'react'
import { useEffect } from 'react'
import "./RowPost.css"
import {backImage} from '../../constants/constants'
import { useState } from 'react'
// import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies, setmovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setmovies(response.data.results)
    // }).catch(err=>{
    //   alert('Network Error')

    })
    
    }
   )
  //  const opts = {
  //   height: '390',
  //   width: '100%',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 0,
  //   },
  // }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
          // eslint-disable-next-line jsx-a11y/alt-text
          <img className={props.isSmall ? 'smallPosters' : 'poster' }src={`${backImage+obj.backdrop_path}`}/>
          )
          }
            
        </div>
          {/* <YouTube opts={opts} videoId="2g811Eo7K8U"/> */}
    </div>
  )
}

export default RowPost
