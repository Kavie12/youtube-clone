import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { VscHistory } from "react-icons/vsc";
import HoverToolTip from "./HoverToolTip";

const SearchItem = props => {
    return (
        <div className='flex items-center gap-x-4 px-4 py-2 hover:bg-yt-white/10 cursor-default'>
            <VscHistory className='text-yt-white text-lg' />
            <h4 className='text-yt-white font-Roboto'>{props.text}</h4>
            <span className='ml-auto font-Roboto text-sm text-sky-600 cursor-pointer hover:underline'>Remove</span>
        </div>
    )
}

const Search = () => {
    const [focus, setFocus] = useState(0);
    const [hoverState, setHoverState] = useState(0);
    return (
        <div className='flex items-stretch w-full'>
            <div className='w-full flex relative'>
                <div className={`flex items-center border border-r-0 pl-4 rounded-l-full border-blue-500/65 ${(focus) ? 'visible' : 'invisible'}`}>
                    <HiMagnifyingGlass className='text-yt-white text-lg' />
                </div>
                <input type="text" placeholder='Search' onFocus={() => setFocus(1)} onBlur={() => setFocus(0)} className={`font-Poppins text-sm bg-transparent border px-4 ${(focus) ? 'border-blue-500/65 rounded-l-none border-l-0' : 'border-yt-white/20'} py-2 text-yt-white rounded-l-full focus:outline-none w-full`} />
                <div className={`absolute bg-yt-gray top-full mt-1 pt-4 rounded-lg left-0 right-0 ${(!focus) ? 'hidden' : ''}`}>
                    <SearchItem text="Mastersoft new projects" />
                    <SearchItem text="Mastersoft new apps" />
                    <SearchItem text="Mastersoft new websites" />
                </div>
            </div>
            <div className='relative border border-yt-white/[.08] hover:border-yt-white/[.06] border-l-0 rounded-r-full cursor-pointer flex items-center bg-yt-white/[.12] hover:bg-yt-white/[.14] px-4' onMouseOver={() => setHoverState(1)} onMouseOut={() => setHoverState(0)}>
                <HiMagnifyingGlass className='text-yt-white text-lg' />
                <HoverToolTip text="Search" display={`${hoverState ? 'flex' : 'hidden'}`} />
            </div>
        </div>
    )
}

export default Search;