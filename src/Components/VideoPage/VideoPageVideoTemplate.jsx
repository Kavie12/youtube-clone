import { Link } from "react-router-dom";

const VideoPageVideoTemplate = props => {

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

    const calcViews = views => {
        if (views >= 1000) {
            return (parseInt(views / 1000) + "K");
        } else {
            return views;
        }
    }
    const calcLength = length => {
        let hours = (length >= 3600) ? parseInt(length / 3600) : 0;
        let minutes = (length >= 3600) ? parseInt((length % 3600) / 60) : parseInt(length / 60);
        let seconds = (length >= 3600) ? ((length % 3600) % 60) : (length % 60);
        seconds = (seconds <= 9) ? ('0' + seconds) : seconds;

        return (((hours > 0) ? (hours + ':') : null) + ((hours > 0) ? ((minutes) <= 9) ? ('0' + minutes) : minutes : minutes) + ':' + seconds);
    }

    return (
        <div className='flex gap-x-2.5'>
            <Link to={'/watch?v=' + props.vidid} className="relative">
                <img src={'/Thumbnails/' + props.thumbnail} alt="thumbnail" className="rounded-xl max-w-40" />
                <span className="text-yt-white bg-yt-black/75 py-1 px-1.5 rounded-md absolute right-1 bottom-1 font-Roboto text-xs font-medium">{calcLength(props.length)}</span>
            </Link>
            <div className="flex gap-x-3 max-w-48">
                <div className="flex flex-col gap-y-0.5">
                    <Link to={'/watch?v=' + props.vidid} className="text-yt-white font-Roboto text-sm font-medium mb-0.5">{props.title}</Link>
                    <Link to={'/watch?v=' + props.vidid} className="text-yt-white/70 font-Roboto text-xs mb-0.5">{props.channel}</Link>
                    <Link to={'/watch?v=' + props.vidid} className="text-yt-white/70 font-Roboto text-xs">{calcViews(props.views) + ' views • ' + calcDate(props.date) + ' ago'}</Link>
                </div>
            </div>
        </div>
    );
}

export default VideoPageVideoTemplate;