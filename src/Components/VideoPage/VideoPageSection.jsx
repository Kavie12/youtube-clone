import { PiThumbsUp } from "react-icons/pi";
import { PiThumbsDown } from "react-icons/pi";
import { PiShareFatLight } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link, useSearchParams } from "react-router-dom";
import VideoPageVideoList from "./VideoPageVideoList";



const VideoPageSection = () => {

    const [v] = useSearchParams();
    const vidId = v.get('v');

    return (
        <div className="mt-20 flex justify-center gap-x-8">

            {/* Left Side */}
            <div>
                <div>
                    <video width="700" controls>
                        <source src="/Videos/video1.mp4" type="video/mp4" />
                    </video>
                </div>
                <h1 className="text-yt-white text-xl font-Roboto font-bold mt-4">How to create a Youtube clone with React</h1>
                <div className="flex mt-4 items-center justify-between">
                    <div className="flex gap-x-6 items-center">
                        {/* Profile */}
                        <div className="flex gap-x-4 items-center">
                            <Link to="/channel/mastersoft">
                                <img src={"/Profile/profile-pic.png"} alt="profile" className="w-12 h-12 object-cover rounded-full" />
                            </Link>
                            <div className="flex flex-col gap-y-0.5">
                                <Link to="/channel/mastersoft">
                                    <h2 className="text-yt-white font-Roboto font-medium">Master Soft</h2>
                                </Link>
                                <span className="text-yt-white/75 font-Roboto text-xs">78K subscribers</span>
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
                                <span className="text-yt-white font-Roboto text-sm font-medium">42K</span>
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