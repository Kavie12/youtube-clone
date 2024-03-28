import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import ChannelSectionVideoList from "./ChannelSectionVideoList";
import { SidebarContext } from "../ContextProvider/ContextProvider";


const ChannelSectionLink = ({ to, text }) => {
    return (
        <NavLink to={to} className={({ isActive }) => `${isActive ? 'text-yt-white border-b-2' : 'text-yt-white/80'} py-2 font-Roboto font-medium`}>
            {text}
        </NavLink>
    );
}

const ChannelSection = () => {
    const [sidebarState] = useContext(SidebarContext);

    const [searchOpen, setSearchOpen] = useState(false);

    const SearchToggle = () => {
        setSearchOpen(!searchOpen);
    }

    return (
        <div className={`my-14 ${sidebarState ? 'w-[1060px]' : 'w-[1250px]'}`}>
            <img src="/Banners/banner1.jpg" alt="banner" className="w-full h-[170px] max-[600px]:h-[100px] object-cover rounded-xl" />
            <div className="flex items-stretch gap-x-8 mt-2">
                <img src="/Profile/profile-pic.png" alt="profile" className="w-40 h-40 max-[600px]:hidden object-cover rounded-full" />
                <div className="flex flex-col items-start justify-center gap-y-4">
                    <h1 className="text-yt-white text-4xl max-[600px]:text-2xl font-Roboto font-bold">Master Soft</h1>
                    <span className="text-yt-white/65 font-Roboto text-sm">@mastersoft ‧ 100K subscribers ‧ 37 videos</span>
                    <button className="bg-transparent border-none bg-yt-white hover:bg-yt-white/90 text-yt-black py-2 px-4 font-Roboto text-sm rounded-2xl font-medium">Subscribe</button>
                </div>
            </div>
            <div className="flex items-center gap-x-8 mt-4 border-b border-yt-white/20 max-[650px]:w-96 max-[650px]:overflow-x-hidden max-[650px]:hover:overflow-x-scroll max-[450px]:w-80 max-[360px]:w-56">
                <div className="flex gap-x-6">
                    <ChannelSectionLink to="/channel/mastersoft" text="Home" />
                    <ChannelSectionLink to="/channel/mastersoft/videos" text="Videos" />
                    <ChannelSectionLink to="/channel/mastersoft/playlists" text="Playlists" />
                    <ChannelSectionLink to="/channel/mastersoft/community" text="Community" />
                </div>
                <div className="flex items-center gap-x-4">
                    <HiMagnifyingGlass className="text-yt-white cursor-pointer" onClick={SearchToggle} />
                    <input type="text" placeholder="Search" className={`bg-transparent border-b-2 border-yt-white outline-none font-Roboto text-yt-white text-sm py-1 ${searchOpen ? 'inline' : 'hidden'}`} onBlur={() => setTimeout(SearchToggle, 200)} />
                </div>
            </div>
            <div className="mt-6">
                <ChannelSectionVideoList />
            </div>
        </div>
    );
}

export default ChannelSection;