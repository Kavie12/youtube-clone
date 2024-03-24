import { createContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export const sidebarContext = createContext();
export const resizeChangeContext = createContext();

const Template = props => {
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
          <Header />
          <Sidebar />
          {props.children}
        </sidebarContext.Provider>
      </resizeChangeContext.Provider>
    </div>
  );
}

export default Template;