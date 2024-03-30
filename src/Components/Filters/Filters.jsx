import { IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";
import { SidebarContext } from "../ContextProvider/ContextProvider";
import FiltersList from "./FiltersList";



const FilterBtn = props => {
    return (
        <button className={`font-Roboto text-sm font-medium py-1.5 px-3 rounded-md whitespace-nowrap transition ${props.active ? 'bg-yt-white text-yt-black' : 'bg-yt-gray text-yt-white hover:bg-yt-white/15'}`}>{props.text}</button>
    );
}

const Filters = () => {
    const [sidebarState] = useContext(SidebarContext);
    return (
        <div className={`bg-yt-black fixed pr-4 py-2 w-full ${sidebarState ? 'pl-[270px]' : 'pl-[100px]'} max-[1250px]:pl-[100px] max-[600px]:px-[20px]`}>
            <div className="py-1">
                <FiltersList />
            </div>
        </div>
    );
}

export default Filters;