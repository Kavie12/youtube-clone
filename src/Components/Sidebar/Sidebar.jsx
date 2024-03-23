import React, { useContext } from 'react';
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { BsCollectionPlay } from "react-icons/bs";
import { MdAccountBox } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { GoClock } from "react-icons/go";
import { PiThumbsUp } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { GoTrophy } from "react-icons/go";
import SubscriptionLogo from "../../Images/profile-pic.png";
import { sidebarContext } from '../../App';
import Link from './Link';
import ChannelLink from './ChannelLink';


const MainLinks = () => {
    return (
        <>
            <Link text="Home" to="/">
                <GoHomeFill className='text-xl text-yt-white' />
            </Link>
            <Link text="Shorts" to="/shorts">
                <SiYoutubeshorts className='text-xl text-yt-white' />
            </Link>
            <Link text="Subscriptions" to="/subscriptions">
                <BsCollectionPlay className='text-xl text-yt-white' />
            </Link>
        </>
    )
}

const PersonalLinks = () => {
    return (
        <>
            <Link text="Your channel" to="/yourchannel">
                <MdAccountBox className='text-xl text-yt-white' />
            </Link>
            <Link text="History" to="/history">
                <VscHistory className='text-xl text-yt-white' />
            </Link>
            <Link text="Your videos" to="/yourvideos">
                <AiOutlinePlaySquare className='text-xl text-yt-white' />
            </Link>
            <Link text="Watch later" to="/watchlater">
                <GoClock className='text-xl text-yt-white' />
            </Link>
            <Link text="Liked videos" to="/likedvideos">
                <PiThumbsUp className='text-xl text-yt-white' />
            </Link>
        </>
    )
}

const SubscriptionsLinks = () => {
    return (
        <>
            <ChannelLink img={SubscriptionLogo} to="/mastersoft" text="Master Soft Technologies" />
            <ChannelLink img={SubscriptionLogo} to="/mastersoft" text="Master Soft Technologies" />
            <ChannelLink img={SubscriptionLogo} to="/mastersoft" text="Master Soft Technologies" />
            <ChannelLink img={SubscriptionLogo} to="/mastersoft" text="Master Soft Technologies" />
            <ChannelLink img={SubscriptionLogo} to="/mastersoft" text="Master Soft Technologies" />
            <ChannelLink img={SubscriptionLogo} to="/mastersoft" text="Master Soft Technologies" />
            <ChannelLink img={SubscriptionLogo} to="/mastersoft" text="Master Soft Technologies" />
        </>
    )
}

const CategoriesLinks = () => {
    return (
        <>
            <Link text="Trending" to="/trending">
                <FaFireAlt className='text-xl text-yt-white' />
            </Link>
            <Link text="Trending" to="/trending">
                <IoMusicalNoteOutline className='text-xl text-yt-white' />
            </Link>
            <Link text="Gaming" to="/gaming">
                <SiYoutubegaming className='text-xl text-yt-white' />
            </Link>
            <Link text="Sports" to="/sports">
                <GoTrophy className='text-xl text-yt-white' />
            </Link>
        </>
    )
}


function Sidebar() {
    const [sidebarState] = useContext(sidebarContext);

    return (
        <div className={`absolute top-0 left-0 h-screen border-yt-black pt-14 pb-4`}>
            <div className={`overflow-y-hidden hover:overflow-y-scroll ${(!sidebarState) ? 'px-1' : 'px-4'} divide-y divide-[#f1f1f1]/20 h-full`}>
                <div className='flex flex-col py-3'>
                    <MainLinks />
                </div>
                <div className={`flex flex-col py-3 ${(!sidebarState) ? 'hidden' : ''}`}>
                    <PersonalLinks />
                </div>
                <div className={`flex flex-col py-3 ${(!sidebarState) ? 'hidden' : ''}`}>
                    <h2 className='text-yt-white font-Roboto font-medium pl-4 pb-1'>Subscriptions</h2>
                    <SubscriptionsLinks />
                    <button className={`flex items-center gap-x-6 py-2.5 px-3 w-52 rounded-lg hover:bg-yt-white/15`}>
                        <IoIosArrowDown className='text-xl text-yt-white' />
                        <h2 className='text-yt-white font-Roboto text-sm whitespace-nowrap overflow-hidden text-ellipsis'>Show 13 more</h2>
                    </button>
                </div>
                <div className={`flex flex-col py-3 ${(!sidebarState) ? 'hidden' : ''}`}>
                    <h2 className='text-yt-white font-Roboto font-medium pl-4 pb-1'>Explore</h2>
                    <CategoriesLinks />
                </div>
            </div>
        </div>
    )
}

export default Sidebar