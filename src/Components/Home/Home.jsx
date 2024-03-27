import HomeVideos from "../HomeVideos/HomeVideos";
import AppLayout from "../AppLayout/AppLayout";
import Header from "../Header/Header";
import Filters from "../Filters/Filters";
import Sidebar from "../Sidebar/Sidebar";
import ContentEnvironment from "../AppLayout/ContentEnvironment";

const Home = () => {
    return (
        <AppLayout>
            <Header>
                <Filters />
            </Header>
            <Sidebar />
            <ContentEnvironment>
                <HomeVideos />
            </ContentEnvironment>
        </AppLayout>
    );
}

export default Home;