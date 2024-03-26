import HomeVideos from "./Components/HomeVideos/HomeVideos";
import AppLayout from "./Components/AppLayout/AppLayout";
import Header from "./Components/Header/Header";
import Filters from "./Components/Filters/Filters";
import Sidebar from "./Components/Sidebar/Sidebar";
import ContentEnvironment from "./Components/AppLayout/ContentEnvironment";

const App = () => {
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

export default App;