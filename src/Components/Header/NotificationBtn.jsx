import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import HoverToolTip from "./HoverToolTip";
import { IoSettingsOutline } from "react-icons/io5";
import VideoData from "../../Data/VideoData.json";

const NotificationPanel = props => {
    return (
        <div className={`absolute top-12 right-0 w-[480px] z-20 bg-yt-gray py-2 rounded-lg ${!(props.display) ? 'hidden' : ''}`}>
            <div className="flex justify-between items-center px-4 py-2 border-b border-yt-white/15">
                <h3 className="text-yt-white font-Roboto">Notifications</h3>
                <IoSettingsOutline className="text-yt-white text-lg cursor-pointer" />
            </div>
            <NotificationList />
        </div>
    );
}

const NotificationList = () => {
    const calcMonths = date => {
        const today = new Date();
        const uploadDate = new Date(date);
        const months = (today.getFullYear() - uploadDate.getFullYear()) * 12;
        return months;
    }
    return (
        <div className="notification-list h-[560px] overflow-hidden hover:overflow-y-scroll">
            {
                VideoData.map((notification, index) => (
                    <Notification
                        key={index}
                        profile={notification.profilepic}
                        channel={notification.channel}
                        title={notification.title}
                        time={calcMonths(notification.date)}
                        thumbnail={notification.thumbnail}
                    />
                ))
            }
        </div>
    );
}

const Notification = props => {
    return (
        <div className="flex gap-x-4 px-4 py-4 cursor-pointer hover:bg-yt-white/10">
            <img src={'/Profile/' + props.profile} alt="profile_img" className="w-12 h-12 object-cover rounded-full" />
            <div className="w-60">
                <h4 className="text-yt-white font-Roboto text-sm">{props.channel} Uploaded: {props.title}</h4>
                <span className="text-yt-white/60 font-Roboto text-xs">{props.time} months ago</span>
            </div>
            <img src={'/Thumbnails/' + props.thumbnail} alt="thumbnail" className="w-24 h-14 object-cover rounded-lg" />
        </div>
    );
}

const NotificationBtn = () => {
    const [hoverState, setHoverState] = useState(0);
    const [panelState, setPanelState] = useState(0);

    return (
        <div className='relative max-[460px]:hidden'>
            <div className="cursor-pointer hover:bg-yt-white/15 rounded-full p-3" onMouseOver={() => setHoverState(1)} onMouseOut={() => setHoverState(0)} onClick={() => { panelState ? setPanelState(0) : setPanelState(1) }}>
                <FaRegBell className='text-yt-white text-xl' />
            </div>
            <HoverToolTip text="Notifications" display={`${hoverState ? 'flex' : 'hidden'}`} />
            <NotificationPanel display={panelState} />
        </div>
    )
}

export default NotificationBtn;