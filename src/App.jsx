import { createContext, useState } from "react";
import Header from "./Components/Header/Header"
import Sidebar from "./Components/Sidebar/Sidebar"
import Home from "./Components/Home/Home";

export const sidebarContext = createContext();

function App() {
  const [sidebarState, setSidebarState] = useState(1);
  return (
    <div className="min-h-screen bg-yt-black">
      <sidebarContext.Provider value={[sidebarState, setSidebarState]}>
        <Header />
        <Sidebar />
        <Home />
      </sidebarContext.Provider>
    </div>
  )
}

export default App
