import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { BiSolidUserAccount } from "react-icons/bi";
import { PiSignOut } from "react-icons/pi";
import { SiYoutubestudio } from "react-icons/si";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { RiShieldUserLine } from "react-icons/ri";
import { GoMoon } from "react-icons/go";
import { HiLanguage } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";
import { FaRegKeyboard } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { useState } from "react";

const ProfileMenu = props => {
    return (
        <div className={`profile-menu z-20 absolute top-4 right-full bg-yt-gray w-72 h-[680px] overflow-y-hidden hover:overflow-y-scroll rounded-xl divide-y divide-[#f1f1f1]/20 ${!props.display ? 'hidden' : null}`}>
            <div className="flex gap-x-3 px-3 py-4">
                <img src={'/Profile/profile-pic.png'} alt="profile_pic" className="w-11 h-11 object-cover rounded-full" />
                <div className="flex flex-col gap-y-1">
                    <span className="text-yt-white font-Roboto text-sm">Master Soft</span>
                    <span className="text-yt-white font-Roboto text-sm">@mastersoft</span>
                    <Link to='/channel/@mastersoft' className="text-sky-400 font-Roboto text-sm mt-1">View your channel</Link>
                </div>
            </div>
            <div className="flex flex-col gap-y-2 py-1.5">
                <ProfileMenuLink to="/" text="Google Account">
                    <BsGoogle className="text-yt-white text-lg" />
                </ProfileMenuLink>
                <ProfileMenuLink to="/" text="Switch account">
                    <BiSolidUserAccount className="text-yt-white text-xl" />
                </ProfileMenuLink>
                <ProfileMenuLink to="/" text="Sign out">
                    <PiSignOut className="text-yt-white text-xl" />
                </ProfileMenuLink>
            </div>
            <div className="flex flex-col gap-y-2 py-1.5">
                <ProfileMenuLink to="/" text="Youtube Studio">
                    <SiYoutubestudio className="text-yt-white text-xl" />
                </ProfileMenuLink>
                <ProfileMenuLink to="/" text="Purchases and memberships">
                    <HiOutlineCurrencyDollar className="text-yt-white text-xl" />
                </ProfileMenuLink>
            </div>
            <div className="flex flex-col gap-y-2 py-1.5">
                <ProfileMenuLink to="/" text="Your data in YouTube">
                    <RiShieldUserLine className="text-yt-white text-xl" />
                </ProfileMenuLink>
                <ProfileMenuLink to="/" text="Appearance: Device theme">
                    <GoMoon className="text-yt-white text-xl" />
                </ProfileMenuLink>
                <ProfileMenuLink to="/" text="Language: English">
                    <HiLanguage className="text-yt-white text-xl" />
                </ProfileMenuLink>
                <ProfileMenuLink to="/" text="Location: Sri Lanka">
                    <CiGlobe className="text-yt-white text-xl" />
                </ProfileMenuLink>
                <ProfileMenuLink to="/" text="Keyboard shortcuts">
                    <FaRegKeyboard className="text-yt-white text-xl" />
                </ProfileMenuLink>
            </div>
            <div className="flex flex-col gap-y-2 py-1.5">
                <ProfileMenuLink to="/" text="Settings">
                    <IoSettingsOutline className="text-yt-white text-xl" />
                </ProfileMenuLink>
            </div>
            <div className="flex flex-col gap-y-2 py-1.5">
                <ProfileMenuLink to="/" text="Help">
                    <IoIosHelpCircleOutline className="text-yt-white text-xl" />
                </ProfileMenuLink>
                <ProfileMenuLink to="/" text="Send feedback">
                    <MdOutlineFeedback className="text-yt-white text-xl" />
                </ProfileMenuLink>
            </div>
        </div>
    );
}

const ProfileMenuLink = props => {
    return (
        <Link to={props.to} className="flex gap-x-4 hover:bg-yt-white/10 px-5 py-2">
            {props.children}
            <span className="text-yt-white font-Roboto text-sm">{props.text}</span>
        </Link>
    );
}

const ProfileBtn = () => {
    const [menuState, setMenuState] = useState(false);

    const toggleMenu = () => {
        setMenuState(!menuState);
    }

    return (
        <div className='relative p-3'>
            <img src={'/Profile/profile-pic.png'} alt="profile_pic" onClick={toggleMenu} className='w-8 h-8 object-cover rounded-full cursor-pointer' />
            <ProfileMenu display={menuState} />
        </div>
    )
}

export default ProfileBtn;