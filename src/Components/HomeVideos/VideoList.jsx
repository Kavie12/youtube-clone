import { useContext } from "react";
import VideoData from "../../Data/VideoData.json";
import VideoTemplate from "./VideoTemplate";
import { resizeChangeContext, sidebarContext } from "../Template/Template";

const VideoList = () => {
    const [sidebarState] = useContext(sidebarContext);
    const resizeChange = useContext(resizeChangeContext);
    return (
        <div className={`grid gap-y-10 gap-x-6 ${(sidebarState && !resizeChange) ? 'grid-cols-3' : 'grid-cols-4 max-[1250px]:grid-cols-3 max-[1050px]:grid-cols-2 max-[750px]:grid-cols-1'}`}>
            {
                VideoData.map((video, index) => (
                    <VideoTemplate
                        key={video.id}
                        thumbnail={video.thumbnail}
                        profilepic={video.profilepic}
                        title={video.title}
                        channel={video.channel}
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