import { useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { sidebarContext } from "../../App";

const Menu = () => {
    const [sidebarState, setSidebarState] = useContext(sidebarContext);
    return (
        <div onClick={() => (sidebarState) ? setSidebarState(false) : setSidebarState(true)} className='cursor-pointer hover:bg-yt-white/15 rounded-full p-2'>
            <RxHamburgerMenu className='text-yt-white text-xl' />
        </div>
    )
}

export default Menu;