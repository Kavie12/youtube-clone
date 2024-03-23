import SidebarLink from "./SidebarLink";
import { FaFireAlt } from "react-icons/fa";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { GoTrophy } from "react-icons/go";

const CategoriesLinks = () => {
    return (
        <>
            <SidebarLink text="Trending" to="/trending">
                <FaFireAlt className='text-xl text-yt-white' />
            </SidebarLink>
            <SidebarLink text="Trending" to="/trending">
                <IoMusicalNoteOutline className='text-xl text-yt-white' />
            </SidebarLink>
            <SidebarLink text="Gaming" to="/gaming">
                <SiYoutubegaming className='text-xl text-yt-white' />
            </SidebarLink>
            <SidebarLink text="Sports" to="/sports">
                <GoTrophy className='text-xl text-yt-white' />
            </SidebarLink>
        </>
    )
}

export default CategoriesLinks;