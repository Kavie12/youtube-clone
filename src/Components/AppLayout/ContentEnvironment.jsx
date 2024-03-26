import { useContext } from "react";
import { ResizeChangeContext, SidebarContext } from "../ContextProvider/ContextProvider";

const ContentEnvironment = ({ children }) => {
    const [sidebarState] = useContext(SidebarContext);
    const resizeChange = useContext(ResizeChangeContext);
    return (
        <div className={`pr-10 ${(sidebarState && !resizeChange) ? 'pl-[270px]' : 'pl-[100px] max-[600px]:pl-[40px]'} z-0 flex justify-center`}>
            {children}
        </div>
    );
}

export default ContentEnvironment;