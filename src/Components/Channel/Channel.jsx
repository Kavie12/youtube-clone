import AppLayout from "../AppLayout/AppLayout";
import ContentEnvironment from "../AppLayout/ContentEnvironment";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import ChannelSection from "./ChannelSection";

const Channel = () => {
    return (
        <AppLayout>
            <Header />
            <Sidebar />
            <ContentEnvironment>
                <ChannelSection />
            </ContentEnvironment>
        </AppLayout>
    );
}

export default Channel;