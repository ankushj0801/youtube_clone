import {useState , useEffect } from 'react';
import { Link , useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography , Box, Stack } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

import { Videos } from "./";

const VideoDetail = ({videos}) => {
  const id= useParams();
  
  return (
    <Box minHeight="98vh">
      <Stack
        direction={{xs:'column' , md: "row"}}
      >
        <Box
          flex={1}
        >
          <Box
            sx={{ width: "100%",position:"sticky", top: "86px"}}
          >
            <ReactPlayer url={`${videos[id.id]?.submission?.mediaUrl}`}
              className="react-player"
              controls
            />
            <Typography color="#FFF" variant='h5' fontWeight="bold" p={2}>
              {videos[id.id]?.submission?.title}
            </Typography>

            <Stack direction="row" justifyContent="space-between" 
              sx={{color: '#fff' ,marginTop:"-20px"}} 
              py={1}
              px={2}
            >
              <Typography sx={{display:"flex"}} alignItems="center" variant={{sm: 'subtitle1' , md: 'h6'}} color="#fff">
                  <img style={{maxWidth: "30px", maxHeight:"30px" , borderRadius:"50%", marginRight:"10px"}} 
                    alt={videos[id.id]?.creator?.name} 
                    src={videos[id.id]?.creator?.pic} 
                  />
                  {videos[id.id]?.creator?.handle}
              </Typography>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{opacity:0.7 ,display: 'flex', alignItems: 'center'}}>
                  {parseInt(videos[id.id]?.reaction?.count).toLocaleString()} <ThumbUpAltIcon/>
                </Typography>
                <Typography variant="body1" sx={{opacity:0.7 , display: 'flex', alignItems: 'center'}}>
                  {parseInt(videos[id.id]?.comment?.count).toLocaleString()} <CommentIcon/>
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      
          <Box
            px={2}
            py={{md:1,xs:5}}
            justifyContent="center"
            alignItems="center"
          >
            <Videos videos={videos} direction="column"/>
          </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail;
