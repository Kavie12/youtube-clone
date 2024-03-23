import { useContext } from "react";
import { sidebarContext } from '../../App';
import { NavLink } from "react-router-dom";

const Link = props => {
    const [sidebarState] = useContext(sidebarContext);
    return (
        <NavLink
            to={props.to}
            className={({ isActive }) => `${(isActive && sidebarState) ? 'bg-yt-white/10' : ''} ${(!sidebarState) ? 'flex-col gap-y-1 w-auto px-0.5 py-4 hover:bg-yt-white/10' : 'px-3 py-2.5 hover:bg-yt-white/15'} flex items-center gap-x-6 w-52 rounded-lg`}
        >
            {props.children}
            <h2 className={`text-yt-white font-Roboto whitespace-nowrap overflow-hidden text-ellipsis ${(!sidebarState) ? 'text-[10px]' : 'text-sm'}`}>{props.text}</h2>
        </NavLink>
    )
}

export default Link;