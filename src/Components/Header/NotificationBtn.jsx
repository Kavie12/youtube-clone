import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import HoverToolTip from "./HoverToolTip";

const NotificationBtn = () => {
    const [hoverState, setHoverState] = useState(0);
    return (
        <div className='relative cursor-pointer hover:bg-yt-white/15 rounded-full p-3 max-[460px]:hidden' onMouseOver={() => setHoverState(1)} onMouseOut={() => setHoverState(0)}>
            <FaRegBell className='text-yt-white text-xl' />
            <HoverToolTip text="Notifications" display={`${hoverState ? 'flex' : 'hidden'}`} />
        </div>
    )
}

export default NotificationBtn;