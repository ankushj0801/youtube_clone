import { useState , useEffect } from 'react';
import axios from 'axios';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import  {fetchFromAPI}  from '../utils/fetchFromAPI';


const Feed = ({videos, setVideos}) => {

  const [ selectedCategory, setSelectedCategory ] = useState('New');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const scrollThreshold = 200;

  const loadVideos = async() => {
    setIsLoading(true);
    await axios.get(`https://internship-service.onrender.com/videos?page=${page}`)
    .then(response => {
      // console.log(response);
      const newVideos = response.data.data.posts; 
      setVideos((prevVideos) => [...prevVideos, ...newVideos]);
    })
    .catch(error=>{
        console.log(error);
    });
    setIsLoading(false);
  };

  useEffect(()=>{
    // fetchFromAPI({page,setVideos,videos});
    
    loadVideos();
    if(page === 10){
        
    }
    else {
      setPage(page+1);
    }
  },[page]);


  return (
    <Stack
      sx={{flexDirection : {sx: "column" , md: "row" }}}
    >
      <Box sx={{ height: { sx:"auto" , md:"92vh"} , borderRight: "1px solid #3d3d3d" , px:{sx:0 , md:2}}} >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2' 
          sx={{ mt:1.5, color: "#fff"}}
        >
          Copyright 2023 Ankush
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: "auto" , height:"90vh" , flex: 2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:"white"}}>
          {selectedCategory} <span style={{color: "#F31503"}}>
          videos
          </span>
        </Typography>
        <Videos videos={videos}/>
        {isLoading && <div style={{color : "white"}}>Loading...</div>}
      </Box>
    </Stack>
  )
}

export default Feed;
