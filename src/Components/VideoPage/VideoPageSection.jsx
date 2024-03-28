import { PiThumbsUp } from "react-icons/pi";
import { PiThumbsDown } from "react-icons/pi";
import { PiShareFatLight } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link, useSearchParams } from "react-router-dom";
import VideoPageVideoList from "./VideoPageVideoList";
import { useState, useEffect } from "react";
import { MdSort } from "react-icons/md";



const VideoPageSection = () => {

    const [showDesc, setShowDesc] = useState(false);
    const [showAddComment, setShowAddComment] = useState(false);

    const [v] = useSearchParams();
    const vidId = v.get('v');

    const [videoData, setVideoData] = useState([]);

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
    }, []);

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
        <div className="mt-20 flex justify-center gap-x-8">

            {/* Left Side */}
            <div className="w-[800px]">
                <div>
                    <video controls className="w-full rounded-lg">
                        <source src="/Videos/video1.mp4" type="video/mp4" />
                    </video>
                </div>
                <h1 className="text-yt-white text-xl font-Roboto font-bold mt-4">{videoData.title}</h1>
                <div className="flex mt-4 items-center justify-between">
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
                <div className={`bg-yt-white/10 mt-4 rounded-xl py-3 px-3 w-full ${!showDesc ? 'cursor-pointer' : null}`} onClick={() => setShowDesc(true)}>
                    <h4 className="text-yt-white font-Roboto text-sm font-medium">{calcViews(videoData.views) + "views " + calcMonths(videoData.date) + " ago"}</h4>
                    <p className={`text-yt-white font-Roboto text-sm ${!showDesc ? 'h-12 overflow-y-hidden' : null}`}>{videoData.desc}</p>
                </div>
                {/* Comment Section */}
                <div className="mt-6">
                    <div className="flex gap-x-8">
                        <span className="text-yt-white font-Roboto text-xl font-bold">23 Comments</span>
                        <div className="flex items-center gap-x-2 cursor-pointer">
                            <MdSort className="text-yt-white text-2xl" />
                            <span className="text-yt-white font-Roboto text-sm font-medium">Sort by</span>
                        </div>
                    </div>
                    <div className="flex gap-x-4 mt-6">
                        <div>
                            <img src={"/Profile/" + videoData.profilepic} alt="profile" className="w-12 h-12 object-cover rounded-full" />
                        </div>
                        <div className="w-full">
                            <input type="text" placeholder="Add a comment..." value={!showAddComment ? '' : null} onClick={() => setShowAddComment(true)} className={`w-full font-Roboto text-sm  bg-transparent pb-1 focus:outline-none ${showAddComment ? 'text-yt-white border-yt-white border-b-2' : 'text-yt-white/25 border-yt-white/25 border-b'}`} />
                            <div className={`${showAddComment ? 'flex' : 'hidden'} items-center justify-end gap-x-2 mt-2`}>
                                <button onClick={() => setShowAddComment(false)} className="text-yt-white text-sm font-medium rounded-3xl py-2 px-4 hover:bg-yt-white/25">Cancel</button>
                                <button className="text-yt-black bg-blue-400 font-medium text-sm rounded-3xl py-2 px-4">Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div>
                <div>
                    <VideoPageVideoList />
                </div>
            </div>

        </div>
    );
}

export default VideoPageSection;