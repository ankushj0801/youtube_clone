import { Stack ,Box } from '@mui/material';
import VideoCard from './VideoCard';

const Videos = ({ videos, direction }) => {
  return (
    <Stack
        direction={direction ||"row"}
        flexWrap="wrap"
        justifyContent="start"
        gap={2}
    >
        {videos.map((item,idx)=>(
            <Box key={idx}>
                {item.postId && <VideoCard video={item} index={idx}/>}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos;