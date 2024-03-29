import { useContext } from "react";
import { SidebarContext } from "../ContextProvider/ContextProvider";

const ContentEnvironment = ({ children, NoSidebarEffect }) => {
    const [sidebarState] = useContext(SidebarContext);
    return (
        <div className={`${NoSidebarEffect ? 'max-[600px]:pr-10' : (sidebarState ? 'pl-[270px] max-[1250px]:pl-[100px] pr-10' : 'pl-[100px] pr-10')} max-[600px]:pl-[40px] z-0 flex justify-center`}>
            {children}
        </div>
    );
}

export default ContentEnvironment;