import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import VideoPageSection from "./VideoPageSection";

const VideoPage = () => {
    return (
        <ContentEnvironment>
            <Header />
            <Sidebar />
            <VideoPageSection />
        </ContentEnvironment>
    );
}

export default VideoPage;