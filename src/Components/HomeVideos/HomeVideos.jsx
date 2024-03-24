import { useContext } from "react";
import VideoList from "./VideoList";
import { resizeChangeContext, sidebarContext } from "../Template/Template";

const HomeVideos = () => {
    const [sidebarState] = useContext(sidebarContext);
    const resizeChange = useContext(resizeChangeContext);
    return (
        <div className={`pt-32 pb-12 pr-10 ${(sidebarState && !resizeChange) ? 'pl-[270px]' : 'pl-[100px]'} z-0`}>
            <VideoList />
        </div>
    );
}

export default HomeVideos;