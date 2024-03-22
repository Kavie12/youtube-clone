import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiMiniMicrophone } from "react-icons/hi2";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import ProfilePic from "../../Images/profile-pic.png";
import YTLogo from "../../Images/yt-logo.svg";


const Menu = () => {
    return (
        <div className='cursor-pointer hover:bg-white/15 rounded-full p-2'>
            <FiMenu className='text-white text-xl' />
        </div>
    )
}

const Logo = () => {
    return (
        <div>
            <Link to={"/"} className='cursor-pointer flex items-center gap-x-1 w-24'>
                <img src={YTLogo} alt="yt-logo" className='w-full' />
            </Link>
        </div>
    )
}

const Search = () => {
    const [focus, setFocus] = useState(0);
    return (
        <div className='flex items-stretch w-full'>
            <div className={`flex items-center border border-r-0 pl-4 rounded-l-full border-blue-500/65 ${(focus) ? 'visible' : 'invisible'}`}>
                <HiMagnifyingGlass className='text-white text-lg' />
            </div>
            <input type="text" placeholder='Search' onFocus={() => setFocus(1)} onBlur={() => setFocus(0)} className={`font-Poppins text-sm bg-transparent border px-4 ${(focus) ? 'border-blue-500/65 rounded-l-none border-l-0' : 'border-white/20'} py-2 text-white rounded-l-full focus:outline-none w-full`} />
            <div className='border border-white/[.08] hover:border-white/[.06] border-l-0 rounded-r-full cursor-pointer flex items-center bg-white/[.12] hover:bg-white/[.14] px-4'>
                <HiMagnifyingGlass className='text-white text-lg' />
            </div>
        </div>
    )
}

const VoiceSearch = () => {
    return (
        <div className='cursor-pointer min-[620px]:bg-white/15 hover:bg-white/20 p-2.5 rounded-full'>
            <HiMiniMicrophone className='text-white text-xl' />
        </div>
    )
}

const CreateBtn = () => {
    return (
        <div className='cursor-pointer hover:bg-white/15 rounded-full p-3'>
            <RiVideoAddLine className='text-white text-xl' />
        </div>
    )
}

const NotificationBtn = () => {
    return (
        <div className='cursor-pointer hover:bg-white/15 rounded-full p-3 max-[460px]:hidden'>
            <FaRegBell className='text-white text-xl' />
        </div>
    )
}

const ProfileBtn = () => {
    return (
        <div className='cursor-pointer p-3'>
            <img src={ProfilePic} alt="profile_pic" className='w-8 h-8 object-cover rounded-full' />
        </div>
    )
}

const MobileSearchBtn = () => {
    const [display, setDisplay] = useState(0);
    return (
        <>
            <div onClick={() => setDisplay(1)} className='cursor-pointer hover:bg-white/15 rounded-full p-3 min-[620px]:hidden'>
                <HiMagnifyingGlass className='text-white text-xl' />
            </div>
            <div className={`absolute left-0 top-0 right-0 bg-black px-4 py-2 items-center ${(display) ? 'flex' : 'hidden'} justify-between min-[620px]:hidden`}>
                <div onClick={() => setDisplay(0)} className='cursor-pointer hover:bg-white/15 rounded-full p-3'>
                    <IoMdArrowBack className='text-white text-2xl' />
                </div>
                <div className='flex gap-x-4 w-full'>
                    <Search />
                    <VoiceSearch />
                </div>
            </div>
        </>
    )
}

function Header() {
    return (
        <div className='fixed top-0 left-0 right-0 bg-black flex pl-4 pr-8 justify-between items-center gap-x-12 max-[420px]:gap-x-0 max-[420px]:pr-4'>
            <div className='flex items-center gap-x-4'>
                <Menu />
                <Logo />
            </div>
            <div className='flex items-center gap-x-4 w-2/5 max-[620px]:hidden'>
                <Search />
                <VoiceSearch />
            </div>
            <div className='flex items-center gap-x-2 max-[620px]:gap-x-0'>
                <MobileSearchBtn />
                <CreateBtn />
                <NotificationBtn />
                <ProfileBtn />
            </div>
        </div>
    )
}

export default Header