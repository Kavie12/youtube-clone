import { useEffect, useState } from "react";
import VideoPageVideoTemplate from "./VideoPageVideoTemplate";

const VideoPageVideoList = () => {

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
        <div className={`grid gap-y-4 gap-x-6 grid-cols-1`}>
            {
                videoData.map((video, index) => (
                    <VideoPageVideoTemplate
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

export default VideoPageVideoList;