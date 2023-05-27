import { useState , useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Videos } from './';
import  {fetchFromAPI}  from '../utils/fetchFromAPI';


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { searchTerm }= useParams();
  const [page, setPage] = useState(0);

  const loadVideos = async() => {
    setIsLoading(true);
    await axios.get(`https://internship-service.onrender.com/videos?page=${page}`)
    .then(response => {
      // console.log(response);
      const newVideos = response.data.data.posts; 
      setVideos(newVideos);
    })
    .catch(error=>{
        console.log(error);
    });
    setIsLoading(false);
  };

  useEffect(()=>{
    // fetchFromAPI({page,setVideos,videos});
    
    loadVideos();
    setPage(page+1);
  },[searchTerm]);


  return (
      <Box p={2} sx={{overflowY: "auto" , height:"90vh" , flex: 2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:"white"}}>
          Search Results For:  <span style={{color: "#F31503"}}>
          {searchTerm}
          </span> videos
        </Typography>
        <Videos videos={videos}/>
        {isLoading && <div style={{color : "white"}}>Loading...</div>}
      </Box>
  )
}

export default SearchFeed;
