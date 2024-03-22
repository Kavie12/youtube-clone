import React from 'react';
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { PiVideoFill } from "react-icons/pi";
import SubscriptionLogo from "../../Images/profile-pic.png";

const Link = props => {
    return (
        <NavLink
            to={props.to}
            className={({ isActive }) => `${isActive ? 'bg-white/15' : ''} flex items-center gap-x-6 py-2 px-3 w-52 rounded-lg hover:bg-white/15`}
        >
            {props.children}
            <h2 className='text-white font-Roboto text-sm'>{props.text}</h2>
        </NavLink>

    )
}

function Sidebar() {
    return (
        <div className='absolute top-0 left-0 h-screen bg-black pt-12'>
            <div className='overflow-y-scroll px-2 divide-y divide-white/25 h-full'>
                <div className='flex flex-col py-4'>
                    <Link text="Home" to="/">
                        <GoHomeFill className='text-2xl text-white' />
                    </Link>
                    <Link text="Shorts" to="/shorts">
                        <SiYoutubeshorts className='text-2xl text-white' />
                    </Link>
                    <Link text="Subscriptions" to="/subscriptions">
                        <PiVideoFill className='text-2xl text-white' />
                    </Link>
                </div>
                <div className='flex flex-col py-4'>
                    <Link text="Your channel" to="/yourchannel">
                        <GoHomeFill className='text-2xl text-white' />
                    </Link>
                    <Link text="History" to="/history">
                        <SiYoutubeshorts className='text-2xl text-white' />
                    </Link>
                    <Link text="Your videos" to="/yourvideos">
                        <PiVideoFill className='text-2xl text-white' />
                    </Link>
                    <Link text="Watch later" to="/watchlater">
                        <PiVideoFill className='text-2xl text-white' />
                    </Link>
                    <Link text="Liked videos" to="/likedvideos">
                        <PiVideoFill className='text-2xl text-white' />
                    </Link>
                </div>
                <div className='flex flex-col py-4'>
                    <h2 className='text-white font-Roboto font-medium pl-4 pb-1'>Subscriptions</h2>
                    <Link text="Master Soft Technologies" to="/mastersoft">
                        <img src={SubscriptionLogo} alt="channel_img" className='w-8 rounded-full' />
                    </Link>
                    <Link text="Master Soft Technologies" to="/mastersoft">
                        <img src={SubscriptionLogo} alt="channel_img" className='w-8 rounded-full' />
                    </Link>
                    <Link text="Master Soft Technologies" to="/mastersoft">
                        <img src={SubscriptionLogo} alt="channel_img" className='w-8 rounded-full' />
                    </Link>
                    <Link text="Master Soft Technologies" to="/mastersoft">
                        <img src={SubscriptionLogo} alt="channel_img" className='w-8 rounded-full' />
                    </Link>
                    <Link text="Master Soft Technologies" to="/mastersoft">
                        <img src={SubscriptionLogo} alt="channel_img" className='w-8 rounded-full' />
                    </Link>
                    <Link text="Master Soft Technologies" to="/mastersoft">
                        <img src={SubscriptionLogo} alt="channel_img" className='w-8 rounded-full' />
                    </Link>
                    <Link text="Master Soft Technologies" to="/mastersoft">
                        <img src={SubscriptionLogo} alt="channel_img" className='w-8 rounded-full' />
                    </Link>
                    <Link text="Master Soft Technologies" to="/mastersoft">
                        <img src={SubscriptionLogo} alt="channel_img" className='w-8 rounded-full' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar