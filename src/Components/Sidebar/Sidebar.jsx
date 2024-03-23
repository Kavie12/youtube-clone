import React, { useContext, useState } from 'react';

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { sidebarContext } from '../../App';

import MainLinks from './MainLinks';
import PersonalLinks from './PersonalLinks';
import SubscriptionsLinks from './SubscriptionsLinks';
import CategoriesLinks from './CategoriesLinks';







function Sidebar() {
    const [sidebarState] = useContext(sidebarContext);
    const [subShowMoreState, setSubShowMoreState] = useState(false);

    const subShowMore = () => {
        setSubShowMoreState(!subShowMoreState);
    }

    const [subCount, setSubCount] = useState(0);

    return (
        <div className={`absolute top-0 left-0 h-screen border-yt-black pt-14 pb-4`}>
            <div className={`overflow-y-hidden hover:overflow-y-scroll ${(!sidebarState) ? 'px-1' : 'px-4'} divide-y divide-[#f1f1f1]/20 h-full`}>
                <div className='flex flex-col py-3'>
                    <MainLinks />
                </div>
                <div className={`flex flex-col py-3 ${(!sidebarState) ? 'hidden' : ''}`}>
                    <PersonalLinks />
                </div>
                <div className={`flex flex-col py-3 ${(!sidebarState) ? 'hidden' : ''}`}>
                    <h2 className='text-yt-white font-Roboto font-medium pl-4 pb-1'>Subscriptions</h2>
                    <SubscriptionsLinks showMore={subShowMoreState} setCount={setSubCount} />
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
                </div>
                <div className={`flex flex-col py-3 ${(!sidebarState) ? 'hidden' : ''}`}>
                    <h2 className='text-yt-white font-Roboto font-medium pl-4 pb-1'>Explore</h2>
                    <CategoriesLinks />
                </div>
            </div>
        </div>
    )
}

export default Sidebar