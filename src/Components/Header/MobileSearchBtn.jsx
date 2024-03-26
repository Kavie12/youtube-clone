import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdArrowBack } from "react-icons/io";
import Search from "./Search";
import VoiceSearch from "./VoiceSearch";

const MobileSearchBtn = () => {
    const [display, setDisplay] = useState(0);
    return (
        <>
            <div onClick={() => setDisplay(1)} className='cursor-pointer hover:bg-yt-white/15 rounded-full p-3 min-[620px]:hidden'>
                <HiMagnifyingGlass className='text-yt-white text-xl' />
            </div>
            <div className={`absolute left-0 top-0 right-0 z-10 bg-yt-black px-4 py-2 items-center ${(display) ? 'flex' : 'hidden'} justify-between min-[620px]:hidden`}>
                <div onClick={() => setDisplay(0)} className='cursor-pointer hover:bg-yt-white/15 rounded-full p-3'>
                    <IoMdArrowBack className='text-yt-white text-2xl' />
                </div>
                <div className='flex gap-x-4 w-full'>
                    <Search />
                    <VoiceSearch />
                </div>
            </div>
        </>
    )
}

export default MobileSearchBtn;