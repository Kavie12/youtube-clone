import React from "react";

const HoverToolTip = props => {
    return (
        <div className={`absolute top-14 left-1/2 -translate-x-1/2 mx-auto bg-yt-white/25 p-2 rounded-md ${props.display}`}>
            <span className='font-Roboto text-xs text-yt-white whitespace-nowrap'>{props.text}</span>
        </div>
    )
}

export default HoverToolTip