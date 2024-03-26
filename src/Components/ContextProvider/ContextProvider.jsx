import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext();
export const ResizeChangeContext = createContext();

const ContextProvider = ({ children }) => {
    // console.log(children);
    const [sidebarState, setSidebarState] = useState(true);
    const [resizeChange, setResizeChange] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, []);

    const handleResize = () => {
        const matchMediaQuery = window.matchMedia("(max-width: 1250px)").matches;
        setSidebarState(!matchMediaQuery);
        setResizeChange(matchMediaQuery);
    };

    return (
        <div className="min-h-screen bg-yt-black">
            <ResizeChangeContext.Provider value={resizeChange}>
                <SidebarContext.Provider value={[sidebarState, setSidebarState]}>
                    {children}
                </SidebarContext.Provider>
            </ResizeChangeContext.Provider>
        </div>
    );
};

export default ContextProvider;