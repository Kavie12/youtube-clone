import React from 'react'
import CreateBtn from './CreateBtn';
import Menu from './Menu';
import Logo from './Logo';
import Search from './Search';
import VoiceSearch from './VoiceSearch';
import NotificationBtn from './NotificationBtn';
import ProfileBtn from './ProfileBtn';
import MobileSearchBtn from './MobileSearchBtn';
import Filters from './Filters';


function Header() {
    return (
        <div className='fixed top-0 left-0 right-0 bg-yt-black z-10'>
            <div className='flex pl-4 pr-8 justify-between items-center gap-x-12 max-[420px]:gap-x-0 max-[420px]:pr-4'>
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
            <div className='fixed pl-72 pr-4 mt-2 w-full'>
                <Filters />
            </div>
        </div>
    )
}

export default Header