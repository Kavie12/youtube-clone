import { useEffect, useState } from "react";
import VideoPlayer from "../VideoPlayer";
import { Link } from "react-router-dom";

const FeaturedVideo = () => {
    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
        fetch('/Data/VideoData.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => setVideoData(data[0]))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    const calcViews = views => {
        if (views >= 1000) {
            return (parseInt(views / 1000) + "K");
        } else {
            return views;
        }
    }

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
        <div className="grid grid-cols-5 gap-x-6 mb-6 w-[70%] max-[1000px]:w-auto max-[1000px]:grid-cols-1">
            <div className="col-span-3 max-[1000px]:col-span-1">
                <VideoPlayer filename={videoData.filename} />
            </div>
            <div className="col-span-2 max-[1000px]:col-span-1 flex flex-col">
                <Link to={`/watch?v=${videoData.id}`} className="text-yt-white font-Roboto font-medium">{videoData.title}</Link>
                <span className="text-yt-white/65 font-Roboto text-xs mt-4">{`${calcViews(videoData.views)} views • ${calcDate(videoData.date)} ago`}</span>
                <p className="text-yt-white font-Roboto text-sm mt-4 h-36 overflow-hidden max-[1000px]:hidden">{videoData.desc}</p>
                <Link to={`/watch?v=${videoData.id}`} className="text-yt-white/65 font-Roboto text-xs mt-1 max-[1000px]:hidden">READ MORE</Link>
            </div>
        </div>
    );
}

export default FeaturedVideo;