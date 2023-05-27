import { Link } from 'react-router-dom';
import { Typography, Card, CardContent , CardMedia} from '@mui/material';

const VideoCard = ({video,index}) => {
    const id=index;
    return (
        <Card
            sx={{width:{ xs: '100%', sm:"358px",md: '320px'}
        , boxShadow: "none" , borderRadius: 0}}
            
        >
            <Link to={`/video/${id}`}>
                
                {/* <CardMedia
                    image={video.submission? video.submission.thumbnail: ""}
                    alt="Video"
                    sx={{width:{xs:"100%",sm:"358px",md:"320px"}, height:"180px" , objectFit: "contain"}}
                /> */}
                <div
                    style={{
                        width: { xs: '100%', sm: '358px', md: '320px' },
                        height: '180px',
                        backgroundImage: `url(${video.submission ? video.submission.thumbnail : ''})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                />
                {/* <img style={{height:190 , maxWidth:358}} src={video.submission? video.submission.thumbnail: ""} alt="Video"/> */}
            </Link>
            <CardContent sx={{backgroundColor: "#1e1e1e", height:"106px"}}>
            <Link to={`/video/${id}`}>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF" >
                    {video?.submission?.description.slice(0,120)}
                </Typography>
            </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard;
