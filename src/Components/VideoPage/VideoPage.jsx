import AppLayout from "../AppLayout/AppLayout";
import ContentEnvironment from "../AppLayout/ContentEnvironment";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import VideoPageSection from "./VideoPageSection";

const VideoPage = () => {
    return (
        <AppLayout NoSidebarEffect={true}>
            <Header />
            <Sidebar NoSidebarEffect={true} />
            <ContentEnvironment NoSidebarEffect={true}>
                <VideoPageSection />
            </ContentEnvironment>
        </AppLayout>
    );
}

export default VideoPage;