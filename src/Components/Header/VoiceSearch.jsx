import { useState } from "react";
import { HiMiniMicrophone } from "react-icons/hi2";
import HoverToolTip from "./HoverToolTip";

const VoiceSearch = () => {
    const [hoverState, setHoverState] = useState(0);
    return (
        <div className='relative cursor-pointer min-[620px]:bg-yt-white/15 hover:bg-yt-white/20 p-2.5 rounded-full' onMouseOver={() => setHoverState(1)} onMouseOut={() => setHoverState(0)}>
            <HiMiniMicrophone className='text-yt-white text-xl' />
            <HoverToolTip text="Search with your voice" display={`${hoverState ? 'flex' : 'hidden'}`} />
        </div>
    );
}

export default VoiceSearch;