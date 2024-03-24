import { createContext, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeVideos from "./Components/HomeVideos/HomeVideos";
import Filters from "./Components/Filters/Filters";

export const sidebarContext = createContext();
export const resizeChangeContext = createContext();

const App = () => {
  const [sidebarState, setSidebarState] = useState(true);
  const [resizeChange, setResizeChange] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const matchMediaQuery = window.matchMedia("(max-width: 1250px)").matches;
      setSidebarState(!matchMediaQuery);
      setResizeChange(matchMediaQuery);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <div className="min-h-screen bg-yt-black">
      <resizeChangeContext.Provider value={resizeChange}>
        <sidebarContext.Provider value={[sidebarState, setSidebarState]}>
          <Header>
            <Filters />
          </Header>
          <Sidebar />
          <HomeVideos />
        </sidebarContext.Provider>
      </resizeChangeContext.Provider>
    </div>
  );
}

export default App;