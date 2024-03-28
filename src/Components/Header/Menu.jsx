import { useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SidebarContext } from "../ContextProvider/ContextProvider";

const Menu = () => {
    const [sidebarState, setSidebarState, setSidebarResizeChange] = useContext(SidebarContext);
    const menuClick = () => {
        setSidebarState(!sidebarState);
        setSidebarResizeChange(false);
    }
    return (
        <div onClick={menuClick} className='cursor-pointer hover:bg-yt-white/15 rounded-full p-2'>
            <RxHamburgerMenu className='text-yt-white text-xl' />
        </div>
    )
}

export default Menu;