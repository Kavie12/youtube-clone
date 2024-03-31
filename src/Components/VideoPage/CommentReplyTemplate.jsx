import { PiThumbsUp } from "react-icons/pi";
import { PiThumbsDown } from "react-icons/pi";

const CommentReplyTemplate = props => {
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
        <div className="flex gap-x-2">
            <div>
                <img src={"/Profile/" + props.profilepic} alt="profilepic" className="w-8 h-8 object-cover rounded-full" />
            </div>
            <div className="flex flex-col items-start w-full">
                <div className="flex items-center px-1.5">
                    <span className="text-yt-white font-Roboto text-sm font-medium">{props.channel}</span>
                    <span className="text-yt-white/60 font-Roboto text-xs ml-1.5">{calcDate(props.date) + ' ago'}</span>
                </div>
                <p className="text-yt-white font-Roboto text-sm mt-1 px-1.5">{props.comment}</p>
                <div className="mt-1 flex items-center">
                    <div className="flex items-center">
                        <div className="p-1.5 hover:bg-yt-white/15 rounded-full cursor-pointer">
                            <PiThumbsUp className="text-yt-white text-xl" />
                        </div>
                        <span className="text-yt-white/60 font-Roboto text-xs">{props.likes}</span>
                    </div>
                    <div className="ml-2.5 p-1.5 hover:bg-yt-white/15 rounded-full cursor-pointer">
                        <PiThumbsDown className="text-yt-white text-xl" />
                    </div>
                    <div className="ml-2 px-3 py-2 cursor-pointer hover:bg-yt-white/15 rounded-2xl flex items-center">
                        <span className="text-yt-white font-Roboto font-medium text-xs">Reply</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CommentReplyTemplate;