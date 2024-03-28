import { useContext } from "react";
import { SidebarContext } from "../ContextProvider/ContextProvider";

const ContentEnvironment = ({ children, NoSidebarEffect }) => {
    const [sidebarState] = useContext(SidebarContext);
    return (
        <div className={`pr-10  ${NoSidebarEffect ? '' : sidebarState ? 'pl-[270px] max-[1250px]:pl-[100px]' : 'pl-[100px]'} max-[600px]:pl-[40px] z-0 flex justify-center`}>
            {children}
        </div>
    );
}

export default ContentEnvironment;