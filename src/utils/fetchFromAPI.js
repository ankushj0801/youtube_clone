import axios from 'axios';

export const fetchFromAPI = ({page,setVideos, videos}) => {
    
    axios.get(`https://internship-service.onrender.com/videos?page=${page}`)
    .then(response => {
        const newVideos = response.data.data;
        // setVideos([...videos, ...newVideos]);
        if(Array.isArray(videos)) {
            setVideos([...videos, ...newVideos]);
        }
        else{
            setVideos(newVideos);
        }
    })
    .catch(error=>{
        console.log(error);
    });
}
