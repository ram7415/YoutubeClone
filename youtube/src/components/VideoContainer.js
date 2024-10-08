import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log('Fetched videos:', json);
    setVideos(json.items);
  };

  return (
    <div className='flex flex-wrap '>
      {videos.length > 0 ? (
       videos.map(video=><Link to={"/watch?v="+video.id}> <VideoCard id={video.id} info={video}/></Link>) 
      ) : (
        <p>Loading...</p> // You can customize this with a spinner or loading animation
      )}
    </div>
  )
}

export default VideoContainer;
