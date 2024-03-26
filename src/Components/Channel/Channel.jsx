import AppLayout from "../AppLayout/AppLayout";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import ChannelSection from "./ChannelSection";

const Channel = () => {
    return (
        <AppLayout>
            <Header />
            <Sidebar />
            <ChannelSection />
        </AppLayout>
    );
}

export default Channel;