import { useContext } from "react";
import VideoData from "../../Data/VideoData.json";
import { ResizeChangeContext, SidebarContext } from "../ContextProvider/ContextProvider";
import ChannelSectionVideoTemplate from "./ChannelSectionVideoTemplate";

const ChannelSectionVideoList = () => {
    const [sidebarState] = useContext(SidebarContext);
    const resizeChange = useContext(ResizeChangeContext);
    return (
        <div className={`grid gap-y-10 gap-x-6 ${(sidebarState && !resizeChange) ? `grid-cols-4` : 'grid-cols-4 max-[1250px]:grid-cols-3 max-[1050px]:grid-cols-2 max-[750px]:grid-cols-1'}`}>
            {
                VideoData.map((video, index) => (
                    <ChannelSectionVideoTemplate
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

export default ChannelSectionVideoList;