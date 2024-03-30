import { useState, useEffect } from "react";
import { FaRegBell } from "react-icons/fa";
import HoverToolTip from "./HoverToolTip";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

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

    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
        fetch('/Data/VideoData.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => setVideoData(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    const calcDate = date => {
        const today = new Date();
        const uploadDate = new Date(date);

        const timeDifference = today - uploadDate;

        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);

        if (months >= 12) {
            if (Math.floor(months / 12) == 1) {
                return `${Math.floor(months / 12)} year`;
            } else {
                return `${Math.floor(months / 12)} years`;
            }
        } else if (months > 0) {
            if (months == 1) {
                return `${months} month`;
            } else {
                return `${months} months`;
            }
        } else if (days > 0) {
            if (days == 1) {
                return `${days} day`;
            } else {
                return `${days} days`;
            }
        } else if (hours > 0) {
            if (hours == 1) {
                return `${hours} hour`;
            } else {
                return `${hours} hours`;
            }
        } else if (minutes > 0) {
            if (minutes == 1) {
                return `${minutes} minute`;
            } else {
                return `${minutes} minutes`;
            }
        } else {
            if (seconds == 1) {
                return `${seconds} second`;
            } else {
                return `${seconds} seconds`;
            }
        }
    }
    return (
        <div className="notification-list h-[560px] overflow-hidden hover:overflow-y-scroll">
            {
                videoData.map((notification, index) => (
                    <Notification
                        key={index}
                        id={notification.id}
                        profile={notification.profilepic}
                        channel={notification.channel}
                        title={notification.title}
                        time={calcDate(notification.date)}
                        thumbnail={notification.thumbnail}
                    />
                ))
            }
        </div>
    );
}

const Notification = props => {
    return (
        <Link to={"/watch?v=" + props.id} className="flex gap-x-4 px-4 py-4 cursor-pointer hover:bg-yt-white/10">
            <img src={'/Profile/' + props.profile} alt="profile_img" className="w-12 h-12 object-cover rounded-full" />
            <div className="w-60">
                <h4 className="text-yt-white font-Roboto text-sm">{props.channel} Uploaded: {props.title}</h4>
                <span className="text-yt-white/60 font-Roboto text-xs">{props.time} ago</span>
            </div>
            <img src={'/Thumbnails/' + props.thumbnail} alt="thumbnail" className="w-24 h-14 object-cover rounded-lg" />
        </Link>
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