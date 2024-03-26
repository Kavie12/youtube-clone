import { IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";
import { SidebarContext } from "../ContextProvider/ContextProvider";



const FilterBtn = props => {
    return (
        <button className={`font-Roboto text-sm font-medium py-1.5 px-3 rounded-md whitespace-nowrap transition ${props.active ? 'bg-yt-white text-yt-black' : 'bg-yt-gray text-yt-white hover:bg-yt-white/15'}`}>{props.text}</button>
    );
}

const Filters = () => {
    const [sidebarState] = useContext(SidebarContext);
    return (
        <div className={`bg-yt-black fixed pr-4 py-2 w-full ${sidebarState ? 'pl-[270px] max-[1250px]:pl-[100px]' : 'pl-[100px]'}`}>
            <div className="relative py-1">
                <div className="home-nav-filters overflow-x-hidden hover:overflow-x-scroll flex gap-x-3">
                    <FilterBtn text="All" active={true} />
                    <FilterBtn text="Music" />
                    <FilterBtn text="Gaming" />
                    <FilterBtn text="Mixes" />
                    <FilterBtn text="Programming" />
                    <FilterBtn text="Cameras" />
                    <FilterBtn text="Playlists" />
                    <FilterBtn text="Live" />
                    <FilterBtn text="Indie Music" />
                    <FilterBtn text="Hiking" />
                    <FilterBtn text="Soundtracks" />
                    <FilterBtn text="House Music" />
                    <FilterBtn text="Comedy" />
                    <FilterBtn text="Guitar" />
                    <FilterBtn text="Cars" />
                    <FilterBtn text="Recently uploaded" />
                    <FilterBtn text="Watched" />
                    <FilterBtn text="New to you" />
                </div>
                <div className="absolute top-0 left-[92%] right-[4%] bottom-0 pointer-events-none flex items-center justify-end bg-gradient-to-r from-transparent to-yt-black"></div>
                <div className="absolute top-0 left-[96%] right-0 bottom-0 bg-yt-black flex items-center justify-center">
                    <div className="p-2 hover:bg-yt-white/20 rounded-full cursor-pointer">
                        <IoIosArrowForward className="text-xl text-yt-white" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filters;