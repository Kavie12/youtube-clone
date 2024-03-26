import { useContext, useState, useEffect } from "react";
import VideoTemplate from "./VideoTemplate";
import { ResizeChangeContext, SidebarContext } from "../ContextProvider/ContextProvider";

const VideoList = () => {
    const [sidebarState] = useContext(SidebarContext);
    const resizeChange = useContext(ResizeChangeContext);

    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
        fetch('/Data/VideoData.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => setVideoData(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div className={`grid gap-y-10 gap-x-6 ${(sidebarState && !resizeChange) ? `grid-cols-3` : 'grid-cols-4 max-[1250px]:grid-cols-3 max-[1050px]:grid-cols-2 max-[750px]:grid-cols-1'}`}>
            {
                videoData.map((video, index) => (
                    <VideoTemplate
                        key={index}
                        vidid={video.id}
                        thumbnail={video.thumbnail}
                        profilepic={video.profilepic}
                        title={video.title}
                        channel={video.channel}
                        channelusername={video.channelusername}
                        views={video.views}
                        date={video.date}
                        length={video.length}
                    />
                ))
            }
        </div>
    );
}

export default VideoList;