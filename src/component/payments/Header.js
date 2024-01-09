import React from 'react';
import { HelpIcon, SearchIcon, HeaderIcon1, HeaderIcon2 } from '../../assets/Icons';

// This can be individual component to reuse it on each page
export default function Header() {
    return (
        <div className='bg-white w-full h-fit flex px-8 py-3 space-x-4 border-b-[1px] '>
            <div className='flex-1 flex items-center gap-4'>
                <div>
                    <span className=''>Payments</span>
                </div>
                <div className='flex gap-[6px] cursor-pointer'>
                    <HelpIcon width={14} height={14} fillColor={'#4D4D4D'} />
                    <span className='text-xs text-[#4D4D4D]'>How it works</span>
                </div>
            </div>
            <div className='flex-1'>
                <div className='flex items-center gap-2 px-4 py-[9px] w-[400px] h-full bg-[#F2F2F2] rounded-md'>
                    <SearchIcon width={16} height={16} fillColor={'#808080'} />
                    <input className='w-full text-[#808080] placeholder:text-[#808080] bg-transparent outline-none' type="text" placeholder='Search features, tutorials, etc.' />
                </div>
            </div>
            <div className='flex-1 flex justify-end gap-3'>
                <div className='flex justify-center items-center w-10 h-10 bg-[#E6E6E6] rounded-full cursor-pointer'>
                    <HeaderIcon1 width={20} height={20} fillColor={'#4D4D4D'} />
                </div>
                <div className='flex justify-center items-center w-10 h-10 bg-[#E6E6E6] rounded-full cursor-pointer'>
                    <HeaderIcon2 width={20} height={12} fillColor={'#4D4D4D'} />
                </div>
            </div>
        </div>
    )
};