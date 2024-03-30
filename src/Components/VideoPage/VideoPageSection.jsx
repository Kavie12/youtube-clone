import { PiThumbsUp } from "react-icons/pi";
import { PiThumbsDown } from "react-icons/pi";
import { PiShareFatLight } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link, useSearchParams } from "react-router-dom";
import VideoPageVideoList from "./VideoPageVideoList";
import { useState, useEffect } from "react";
import { MdSort } from "react-icons/md";
import { IoCaretDownSharp } from "react-icons/io5";
import { IoCaretUpSharp } from "react-icons/io5";
import FiltersList from "../Filters/FiltersList";


const CommentTemplate = props => {
    const [showReply, setShowReply] = useState(false);

    const calcMonths = date => {
        const today = new Date();
        const uploadDate = new Date(date);
        const months = (today.getFullYear() - uploadDate.getFullYear()) * 12;
        return (months + " months ago");
    }
    return (
        <div>
            <div className="flex gap-x-2">
                <Link to="/channel/mastersoft">
                    <img src={"/Profile/" + props.profilepic} alt="profilepic" className="w-12 h-12 object-cover rounded-full" />
                </Link>
                <div className="flex flex-col items-start w-full">
                    <Link to="/channel/mastersoft" className="flex items-center px-1.5">
                        <span className="text-yt-white font-Roboto text-sm font-medium">{props.channel}</span>
                        <span className="text-yt-white/60 font-Roboto text-xs ml-1.5">{calcMonths(props.date)}</span>
                    </Link>
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
                    {
                        (props.replycount > 0) ?
                            <div onClick={() => setShowReply(!showReply)} className="cursor-pointer px-4 py-2 rounded-3xl hover:bg-blue-500/25 flex items-center">
                                {
                                    !showReply ?
                                        <IoCaretDownSharp className="text-blue-500 text-sm" />
                                        :
                                        <IoCaretUpSharp className="text-blue-500 text-sm" />
                                }
                                <span className="font-Roboto text-sm text-blue-500 font-medium ml-2">{props.replycount + " replies"}</span>
                            </div>
                            :
                            null
                    }
                </div>
            </div>
            {
                (props.replycount > 0 && showReply) ?
                    <div className="ml-16 mt-1 flex flex-col gap-y-2">
                        {
                            props.replydata.map(reply => (
                                <CommentReplyTemplate
                                    key={reply.replyid}
                                    channel={reply.channel}
                                    profilepic={reply.profilepic}
                                    comment={reply.comment}
                                    date={reply.date}
                                    likes={reply.likes}
                                />
                            ))
                        }
                    </div>
                    :
                    null
            }
        </div>
    );
}

const CommentReplyTemplate = props => {
    const calcMonths = date => {
        const today = new Date();
        const uploadDate = new Date(date);
        const months = (today.getFullYear() - uploadDate.getFullYear()) * 12;
        return (months + " months ago");
    }
    return (
        <div className="flex gap-x-2">
            <div>
                <img src={"/Profile/" + props.profilepic} alt="profilepic" className="w-8 h-8 object-cover rounded-full" />
            </div>
            <div className="flex flex-col items-start w-full">
                <div className="flex items-center px-1.5">
                    <span className="text-yt-white font-Roboto text-sm font-medium">{props.channel}</span>
                    <span className="text-yt-white/60 font-Roboto text-xs ml-1.5">{calcMonths(props.date)}</span>
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

const VideoPageSection = () => {

    const [videoData, setVideoData] = useState([]);
    const [comments, setComments] = useState([]);
    const [showDesc, setShowDesc] = useState(false);
    const [showAddComment, setShowAddComment] = useState(false);

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

    const calcMonths = date => {
        const today = new Date();
        const uploadDate = new Date(date);
        const months = (today.getFullYear() - uploadDate.getFullYear()) * 12;
        return (months + " months");
    }

    return (
        <div className="my-20 grid gap-x-6 gap-y-8 grid-cols-3 grid-flow-row max-[1050px]:grid-cols-1 w-[1300px] items-start">

            <div className="col-span-2 max-[1050px]:col-span-1">
                <div>
                    <video controls controlsList="nodownload" className="w-full rounded-lg">
                        <source src={"/Videos/video1.mp4"} type="video/mp4" />
                    </video>
                </div>
                <h1 className="text-yt-white text-xl font-Roboto font-bold mt-4">{videoData.title}</h1>
                <div className="flex mt-4 items-center justify-between max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-y-2">
                    <div className="flex gap-x-6 items-center">
                        {/* Profile */}
                        <div className="flex gap-x-4 items-center">
                            <Link to="/channel/mastersoft">
                                <img src={"/Profile/" + videoData.profilepic} alt="profile" className="w-12 h-12 object-cover rounded-full" />
                            </Link>
                            <div className="flex flex-col gap-y-0.5">
                                <Link to="/channel/mastersoft">
                                    <h2 className="text-yt-white font-Roboto font-medium">{videoData.channel}</h2>
                                </Link>
                                <span className="text-yt-white/75 font-Roboto text-xs">{subCountCalc(videoData.subcount) + " subscribers"}</span>
                            </div>
                        </div>
                        {/* Sub Btn */}
                        <button className="bg-transparent border-none bg-yt-white hover:bg-yt-white/90 text-yt-black py-2 px-4 font-Roboto text-sm rounded-2xl font-medium">Subscribe</button>
                    </div>
                    <div className="flex items-center gap-x-2">
                        {/* Like Dislike */}
                        <div className="bg-yt-gray flex items-center rounded-2xl">
                            <div className="flex items-center gap-x-2 py-2 cursor-pointer px-4 rounded-l-2xl hover:bg-yt-white/10">
                                <PiThumbsUp className="text-yt-white text-xl" />
                                <span className="text-yt-white font-Roboto text-sm font-medium">{likesCalc(videoData.likes)}</span>
                            </div>
                            <div className="w-[1px] h-6 bg-yt-white/25"></div>
                            <div className="flex items-center py-2 cursor-pointer px-4 rounded-r-2xl hover:bg-yt-white/10">
                                <PiThumbsDown className="text-yt-white text-xl" />
                            </div>
                        </div>
                        {/* Share */}
                        <div className="bg-yt-gray flex items-center rounded-2xl">
                            <div className="flex items-center gap-x-2 py-2 cursor-pointer px-4 rounded-2xl hover:bg-yt-white/10">
                                <PiShareFatLight className="text-yt-white text-xl" />
                                <span className="text-yt-white font-Roboto text-sm font-medium">Share</span>
                            </div>
                        </div>
                        {/* Menu */}
                        <div className="bg-yt-gray flex items-center rounded-2xl">
                            <div className="flex items-center gap-x-2 py-2 cursor-pointer px-2 rounded-full hover:bg-yt-white/10">
                                <HiDotsHorizontal className="text-yt-white text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Description Box */}
                <div className={`relative bg-zinc-800 mt-4 rounded-xl py-3 px-3 w-full ${!showDesc ? 'cursor-pointer' : null}`} onClick={() => !showDesc ? setShowDesc(true) : null}>
                    <h4 className="text-yt-white font-Roboto text-sm font-medium">{calcViews(videoData.views) + "views " + calcMonths(videoData.date) + " ago"}</h4>
                    <p className={`text-yt-white font-Roboto text-sm ${!showDesc ? 'h-12 overflow-y-hidden' : 'mb-4'}`}>{videoData.desc}</p>
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
                        <img src={"/Profile/" + videoData.profilepic} alt="profile" className="w-12 h-12 object-cover rounded-full" />
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