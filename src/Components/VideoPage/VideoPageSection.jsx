import { PiThumbsUp } from "react-icons/pi";
import { PiThumbsDown } from "react-icons/pi";
import { PiShareFatLight } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link, useSearchParams } from "react-router-dom";
import VideoPageVideoList from "./VideoPageVideoList";
import { useState, useEffect } from "react";
import { MdSort } from "react-icons/md";
import FiltersList from "../Filters/FiltersList";
import { RiPlayListAddFill } from "react-icons/ri";
import { SlFlag } from "react-icons/sl";
import CommentTemplate from "./CommentTemplate";
import VideoPlayer from "./VideoPlayer";


const VideoPageSection = () => {

    const [videoData, setVideoData] = useState([]);
    const [comments, setComments] = useState([]);
    const [showDesc, setShowDesc] = useState(false);
    const [showAddComment, setShowAddComment] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const [vidId, setVidId] = useState(0);
    const [params] = useSearchParams();

    useEffect(() => {
        setVidId(params.get('v'));
    }, [params]);

    useEffect(() => {
        fetch('/Data/VideoData.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => setVideoData(data[vidId]))
            .catch(error => console.error('Error fetching data: ', error));

        fetch('/Data/CommentData.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => setComments(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, [vidId]);

    const subCountCalc = count => {
        if (count >= 1000) {
            return (parseInt(count / 1000) + 'K');
        } else {
            return count;
        }
    }

    const likesCalc = count => {
        if (count >= 1000) {
            return (parseInt(count / 1000) + 'K');
        } else {
            return count;
        }
    }

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

    const calcDateLong = date => {
        const uploadDate = new Date(date);
        const year = uploadDate.getFullYear();
        let month = "";
        switch (uploadDate.getMonth()) {
            case 0: month = "Jan";
                break;
            case 1: month = "Feb";
                break;
            case 2: month = "Mar";
                break;
            case 3: month = "Apr";
                break;
            case 4: month = "May";
                break;
            case 5: month = "Jun";
                break;
            case 6: month = "Jul";
                break;
            case 7: month = "Aug";
                break;
            case 8: month = "Sep";
                break;
            case 9: month = "Oct";
                break;
            case 10: month = "Nov";
                break;
            case 11: month = "Dec";
                break;
            default: month = "error"
        }
        const dateNo = uploadDate.getDate();

        return (month + " " + dateNo + ", " + year);
    }

    return (
        <div className="my-20 grid gap-x-6 gap-y-8 grid-cols-3 grid-flow-row max-[1050px]:grid-cols-1 w-[1300px] items-start">

            <div className="col-span-2 max-[1050px]:col-span-1">
                <div>
                    <VideoPlayer filename={videoData.filename} />
                </div>
                <h1 className="text-yt-white text-xl font-Roboto font-bold mt-4">{videoData.title}</h1>
                <div className="flex mt-4 items-center justify-between max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-y-2">
                    <div className="flex gap-x-6 items-center">
                        {/* Profile */}
                        <div className="flex gap-x-4 items-center">
                            <Link to={"/channel/@" + videoData.channelusername}>
                                <img src={"/Profile/" + videoData.profilepic} alt="profile" className="w-12 h-12 object-cover rounded-full" />
                            </Link>
                            <div className="flex flex-col gap-y-0.5">
                                <Link to={"/channel/@" + videoData.channelusername}>
                                    <h2 className="text-yt-white font-Roboto font-medium">{videoData.channel}</h2>
                                </Link>
                                <span className="text-yt-white/75 font-Roboto text-xs">{subCountCalc(videoData.subcount) + " subscribers"}</span>
                            </div>
                        </div>
                        {/* Sub Btn */}
                        <button className="bg-transparent border-none bg-yt-white hover:bg-yt-white/90 text-yt-black py-2 px-4 font-Roboto text-sm rounded-3xl font-medium">Subscribe</button>
                    </div>
                    <div className="flex items-center gap-x-2">
                        {/* Like Dislike */}
                        <div className="bg-yt-gray flex items-center rounded-3xl">
                            <div className="flex items-center gap-x-2 py-2 cursor-pointer px-4 rounded-l-3xl hover:bg-yt-white/10">
                                <PiThumbsUp className="text-yt-white text-xl" />
                                <span className="text-yt-white font-Roboto text-sm font-medium">{likesCalc(videoData.likes)}</span>
                            </div>
                            <div className="w-[1px] h-6 bg-yt-white/25"></div>
                            <div className="flex items-center py-2 cursor-pointer px-4 rounded-r-3xl hover:bg-yt-white/10">
                                <PiThumbsDown className="text-yt-white text-xl" />
                            </div>
                        </div>
                        {/* Share */}
                        <div className="bg-yt-gray flex items-center rounded-2xl">
                            <div className="flex items-center gap-x-2 py-2 cursor-pointer px-4 rounded-3xl hover:bg-yt-white/10">
                                <PiShareFatLight className="text-yt-white text-xl" />
                                <span className="text-yt-white font-Roboto text-sm font-medium">Share</span>
                            </div>
                        </div>
                        {/* Menu */}
                        <div className="relative bg-yt-gray flex items-center rounded-2xl">
                            <div onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-x-2 py-2 cursor-pointer px-2 rounded-full hover:bg-yt-white/10">
                                <HiDotsHorizontal className="text-yt-white text-xl" />
                            </div>
                            <div className={`bg-yt-gray absolute top-10 z-10 py-2 rounded-lg ${!menuOpen ? 'hidden' : null}`}>
                                <div className="flex items-center gap-x-4 py-2 px-6 hover:bg-yt-white/10 cursor-pointer">
                                    <RiPlayListAddFill className="text-yt-white text-lg" />
                                    <span className="font-Roboto text-yt-white text-sm">Save</span>
                                </div>
                                <div className="flex items-center gap-x-4 py-2 px-6 hover:bg-yt-white/10 cursor-pointer">
                                    <SlFlag className="text-yt-white text-lg" />
                                    <span className="font-Roboto text-yt-white text-sm">Report</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Description Box */}
                <div className={`relative bg-zinc-800 mt-4 rounded-xl py-3 px-3 w-full ${!showDesc ? 'cursor-pointer' : null}`} onClick={() => !showDesc ? setShowDesc(true) : null}>
                    <div className="flex gap-x-2">
                        <h4 className="text-yt-white font-Roboto text-sm font-medium">{`${calcViews(videoData.views)} views`}</h4>
                        <h4 className="text-yt-white font-Roboto text-sm font-medium">{`${!showDesc ? (calcDate(videoData.date) + ' ago') : calcDateLong(videoData.date)}`}</h4>
                    </div>
                    <p className={`text-yt-white font-Roboto text-sm ${!showDesc ? 'h-14 overflow-y-hidden' : 'mb-4'}`}>{videoData.desc}</p>
                    {
                        !showDesc ?
                            <span className="text-yt-white font-Roboto text-sm absolute bottom-1.5 right-2 px-2 bg-zinc-800 font-medium">...more</span>
                            :
                            <span onClick={() => setShowDesc(false)} className="text-yt-white font-Roboto text-sm bg-zinc-800 font-medium cursor-pointer">Show less</span>
                    }
                </div>
            </div>



            {/* Video List in Right side */}
            <div className="row-span-3 max-[1050px]:row-span-1">
                <div className="relative pb-6">
                    <FiltersList />
                </div>
                <VideoPageVideoList />
                <div className="pt-4 hidden max-[1050px]:block">
                    <button className="text-sky-500 text-sm font-Roboto font-medium border border-yt-white/25 w-full py-2 rounded-3xl hover:border-yt-white/0 hover:bg-sky-500/25">Show more</button>
                </div>
            </div>



            {/* Comment Section */}
            <div className="col-span-2 max-[1050px]:col-span-1">
                <div className="flex gap-x-8">
                    <span className="text-yt-white font-Roboto text-xl font-bold">23 Comments</span>
                    <div className="flex items-center gap-x-2 cursor-pointer">
                        <MdSort className="text-yt-white text-2xl" />
                        <span className="text-yt-white font-Roboto text-sm font-medium">Sort by</span>
                    </div>
                </div>
                {/* Add Comment */}
                <div className="flex gap-x-4 mt-6">
                    <div>
                        <img src={"/Profile/profile-pic.png"} alt="profile" className="w-12 h-12 object-cover rounded-full" />
                    </div>
                    <div className="w-full">
                        <input type="text" placeholder="Add a comment..." onClick={() => setShowAddComment(true)} className={`w-full font-Roboto text-sm  bg-transparent pb-1 focus:outline-none ${showAddComment ? 'text-yt-white border-yt-white border-b-2' : 'text-yt-white/25 border-yt-white/25 border-b'}`} />
                        <div className={`${showAddComment ? 'flex' : 'hidden'} items-center justify-end gap-x-2 mt-2`}>
                            <button onClick={() => setShowAddComment(false)} className="text-yt-white text-sm font-medium rounded-3xl py-2 px-4 hover:bg-yt-white/25">Cancel</button>
                            <button className="text-yt-black bg-blue-400 font-medium text-sm rounded-3xl py-2 px-4">Comment</button>
                        </div>
                    </div>
                </div>
                {/* Other comments */}
                <div className="mt-6 flex flex-col gap-y-6">
                    {
                        comments.map(comment => (
                            <CommentTemplate
                                key={comment.id}
                                channel={comment.channel}
                                profilepic={comment.profilepic}
                                comment={comment.comment}
                                date={comment.date}
                                likes={comment.likes}
                                replycount={comment.replycount}
                                replydata={comment.replies}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default VideoPageSection;