import YTLogo from "../../Images/yt-logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to={"/"} className='cursor-pointer flex items-center gap-x-1 w-24'>
                <img src={YTLogo} alt="yt-logo" className='w-full' />
            </Link>
        </div>
    )
}

export default Logo;