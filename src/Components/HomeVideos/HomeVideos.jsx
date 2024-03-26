import { useContext } from "react";
import VideoList from "./VideoList";
import { ResizeChangeContext, SidebarContext } from "../ContextProvider/ContextProvider";

const HomeVideos = () => {
    const [sidebarState] = useContext(SidebarContext);
    const resizeChange = useContext(ResizeChangeContext);
    return (
        <div className="pt-32 pb-12">
            <VideoList />
        </div>
    );
}

export default HomeVideos;