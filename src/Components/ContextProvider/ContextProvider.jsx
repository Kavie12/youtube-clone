import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext();

const ContextProvider = ({ children, NoSidebarEffect }) => {
    // console.log(children);
    const [sidebarState, setSidebarState] = useState(true);
    const [sidebarResizeChange, setSidebarResizeChange] = useState(true);

    const handleResize = () => {
        const matchMediaQuery = window.matchMedia("(max-width: 1250px)").matches;
        setSidebarState(!matchMediaQuery);
    };

    useEffect(() => {
        handleResize();
        if (NoSidebarEffect == true) {
            setSidebarState(false);
        }
    }, []);

    useEffect(() => {
        if (!NoSidebarEffect) {
            window.addEventListener("resize", handleResize);
        }
        return () => {
            if (!sidebarResizeChange) {
                window.removeEventListener("resize", handleResize);
            }
        }
    }, [sidebarResizeChange]);

    return (
        <div className="min-h-screen bg-yt-black">
            <SidebarContext.Provider value={[sidebarState, setSidebarState, setSidebarResizeChange]}>
                {children}
            </SidebarContext.Provider>
        </div>
    );
};

export default ContextProvider;