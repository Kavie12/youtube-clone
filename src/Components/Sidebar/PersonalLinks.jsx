import SidebarLink from "./SidebarLink";
import { MdAccountBox } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { GoClock } from "react-icons/go";
import { PiThumbsUp } from "react-icons/pi";

const PersonalLinks = () => {
    return (
        <>
            <SidebarLink text="Your channel" to="/yourchannel">
                <MdAccountBox className='text-xl text-yt-white' />
            </SidebarLink>
            <SidebarLink text="History" to="/history">
                <VscHistory className='text-xl text-yt-white' />
            </SidebarLink>
            <SidebarLink text="Your videos" to="/yourvideos">
                <AiOutlinePlaySquare className='text-xl text-yt-white' />
            </SidebarLink>
            <SidebarLink text="Watch later" to="/watchlater">
                <GoClock className='text-xl text-yt-white' />
            </SidebarLink>
            <SidebarLink text="Liked videos" to="/likedvideos">
                <PiThumbsUp className='text-xl text-yt-white' />
            </SidebarLink>
        </>
    )
}

export default PersonalLinks;