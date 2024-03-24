import { useState } from "react";
import { Link } from 'react-router-dom';
import { AiOutlinePlaySquare } from "react-icons/ai";
import { HiMiniSignal } from "react-icons/hi2";
import { PiNotePencilThin } from "react-icons/pi";
import { RiVideoAddLine } from "react-icons/ri";
import HoverToolTip from "./HoverToolTip";

const CreateDropdown = props => {
    return (
        <div className={`absolute top-12 left-0 z-20 bg-yt-gray py-2 rounded-lg ${!(props.display) ? 'hidden' : ''}`}>
            <CreateDropdownLink to="/upload" text="Upload video">
                <AiOutlinePlaySquare className='text-yt-white text-xl' />
            </CreateDropdownLink>
            <CreateDropdownLink to="/live" text="Go live">
                <HiMiniSignal className='text-yt-white text-xl' />
            </CreateDropdownLink>
            <CreateDropdownLink to="/post" text="Create Post">
                <PiNotePencilThin className='text-yt-white text-xl' />
            </CreateDropdownLink>
        </div>
    )
}

const CreateDropdownLink = props => {
    return (
        <Link to={props.to} className='flex items-center gap-x-4 pl-4 pr-8 py-2.5 hover:bg-yt-white/15'>
            {props.children}
            <span className='text-yt-white text-sm font-Roboto whitespace-nowrap'>{props.text}</span>
        </Link>
    )
}

const CreateBtn = () => {
    const [hoverState, setHoverState] = useState(false);
    const [menuState, setMenuState] = useState(false);

    return (
        <div className='relative'>
            <div className='cursor-pointer hover:bg-yt-white/15 rounded-full p-3' onMouseOver={() => setHoverState(1)} onMouseOut={() => setHoverState(false)} onClick={() => { menuState ? setMenuState(false) : setMenuState(true) }}>
                <RiVideoAddLine className='text-yt-white text-xl' />
            </div>
            <HoverToolTip text="Create" display={`${hoverState ? 'flex' : 'hidden'}`} />
            <CreateDropdown display={menuState} />
        </div>
    )
}

export default CreateBtn