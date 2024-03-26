import AppLayout from "../AppLayout/AppLayout";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import VideoPageSection from "./VideoPageSection";

const VideoPage = () => {
    return (
        <AppLayout>
            <Header />
            <Sidebar />
            <VideoPageSection />
        </AppLayout>
    );
}

export default VideoPage;