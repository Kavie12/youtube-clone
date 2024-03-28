import { Link } from "react-router-dom";

const VideoPageVideoTemplate = props => {

    const calcMonths = date => {
        const today = new Date();
        const uploadDate = new Date(date);
        const months = (today.getFullYear() - uploadDate.getFullYear()) * 12;
        return months;
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
                <img src={'/Thumbnails/' + props.thumbnail} alt="thumbnail" className="rounded-xl max-w-44" />
                <span className="text-yt-white bg-yt-black/75 py-1 px-1.5 rounded-md absolute right-1 bottom-1 font-Roboto text-xs font-medium">{calcLength(props.length)}</span>
            </Link>
            <div className="flex gap-x-3 max-w-48">
                <div className="flex flex-col gap-y-0.5">
                    <Link to={'/watch?v=' + props.vidid} className="text-yt-white font-Roboto text-sm font-medium mb-0.5">{props.title}</Link>
                    <Link to={'/watch?v=' + props.vidid} className="text-yt-white/70 font-Roboto text-xs mb-0.5">{props.channel}</Link>
                    <Link to={'/watch?v=' + props.vidid} className="text-yt-white/70 font-Roboto text-xs">{calcViews(props.views) + ' views • ' + calcMonths(props.date) + ' months ago'}</Link>
                </div>
            </div>
        </div>
    );
}

export default VideoPageVideoTemplate;