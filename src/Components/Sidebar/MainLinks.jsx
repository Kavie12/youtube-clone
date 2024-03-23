import SidebarLink from "./SidebarLink";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { BsCollectionPlay } from "react-icons/bs";

const MainLinks = () => {
    return (
        <>
            <SidebarLink text="Home" to="/">
                <GoHomeFill className='text-xl text-yt-white' />
            </SidebarLink>
            <SidebarLink text="Shorts" to="/shorts">
                <SiYoutubeshorts className='text-xl text-yt-white' />
            </SidebarLink>
            <SidebarLink text="Subscriptions" to="/subscriptions">
                <BsCollectionPlay className='text-xl text-yt-white' />
            </SidebarLink>
        </>
    )
}

export default MainLinks;