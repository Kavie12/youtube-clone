import React, { useContext, useState } from 'react';

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import MainLinks from './MainLinks';
import PersonalLinks from './PersonalLinks';
import SubscriptionsLinks from './SubscriptionsLinks';
import CategoriesLinks from './CategoriesLinks';

import { SidebarContext } from '../ContextProvider/ContextProvider';




const Sidebar = ({ NoSidebarEffect }) => {
    const [sidebarState] = useContext(SidebarContext);
    const [subShowMoreState, setSubShowMoreState] = useState(false);

    const subShowMore = () => {
        setSubShowMoreState(!subShowMoreState);
    };

    const [subCount, setSubCount] = useState(0);

    const handleSubCount = (count) => {
        setSubCount(count);
        // console.log(count);
    };

    return (
        <div className={`bg-yt-black z-10 fixed top-0 left-0 h-screen border-yt-black mt-12 pb-16`}>
            <div className={`sidebar overflow-y-hidden hover:overflow-y-scroll ${(!sidebarState) ? 'px-1' : 'px-4'} divide-y divide-[#f1f1f1]/20 h-full`}>
                <div className={`flex-col py-3 ${(!sidebarState) ? (NoSidebarEffect ? 'hidden' : 'max-[600px]:hidden') : 'flex'}`}>
                    <MainLinks />
                </div>
                <div className={`flex-col py-3 ${(!sidebarState) ? 'hidden' : 'flex'}`}>
                    <PersonalLinks />
                </div>
                <div className={`flex-col py-3 ${(!sidebarState) ? 'hidden' : 'flex'}`}>
                    <h2 className='text-yt-white font-Roboto font-medium pl-4 pb-1'>Subscriptions</h2>
                    <SubscriptionsLinks showMore={subShowMoreState} setCount={handleSubCount} />
                    {
                        subCount > 7 ?
                            <button onClick={() => subShowMore()} className={`flex items-center gap-x-6 py-2.5 px-3 w-52 rounded-lg hover:bg-yt-white/15`}>
                                {
                                    subShowMoreState ?
                                        <IoIosArrowUp className='text-xl text-yt-white' />
                                        :
                                        <IoIosArrowDown className='text-xl text-yt-white' />
                                }
                                <h2 className='text-yt-white font-Roboto text-sm whitespace-nowrap overflow-hidden text-ellipsis'>
                                    {subShowMoreState ? 'Show less' : 'Show ' + (subCount - 7) + ' more'}
                                </h2>
                            </button>
                            :
                            null
                    }
                </div>
                <div className={`flex-col py-3 ${(!sidebarState) ? 'hidden' : 'flex'}`}>
                    <h2 className='text-yt-white font-Roboto font-medium pl-4 pb-1'>Explore</h2>
                    <CategoriesLinks />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;