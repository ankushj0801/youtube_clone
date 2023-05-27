import {BrowserRouter , Routes , Route } from 'react-router-dom';
import { useState } from 'react';
import {Box } from '@mui/material';
import {Navbar , Feed, VideoDetail , ChannelDetail , SearchFeed} from "./components";

const App = () => {

    const [videos, setVideos] = useState([]);
    return (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Feed videos={videos} setVideos={setVideos}/>} />
                <Route path="/video/:id" element={<VideoDetail videos={videos} />} />
                <Route path="/channel/:id" element={<ChannelDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
    )
}

export default App;
