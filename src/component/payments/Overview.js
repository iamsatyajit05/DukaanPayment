import React from 'react';
import { DropdownIcon } from '../../assets/Icons';

export default function Overview() {
    return (
        <div className='space-y-6'>
            <div className='flex justify-between'>
                <div>
                    <span className='text-xl font-medium'>Overview</span>
                </div>
                <div>
                    <button onClick={() => {alert('This will be dropdown')}} className='w-[138px] h-9 flex justify-center items-center gap-2 rounded bg-white border border-[#D9D9D9]'>
                        <span className='text-[#4D4D4D]'>Last Month</span>
                        <span>
                            <DropdownIcon width={16} height={10} fillColor={'#4D4D4D'} />
                        </span>
                    </button>
                </div>
            </div>
            <div className='flex space-x-5'>
                <div className='flex-1 flex flex-col gap-4 p-5 bg-white rounded-md' style={{
                    boxShadow: '0 2px 6px 0 rgba(26,24,30,0.04)'
                }}>
                    <span className='text-[#4D4D4D]'>Online orders</span>
                    <span className='font-medium text-[32px] leading-7'>231</span>
                </div>
                <div className='flex-1 flex flex-col gap-4 p-5 bg-white rounded-md' style={{
                    boxShadow: '0 2px 6px 0 rgba(26,24,30,0.04)'
                }}>
                    <span className='text-[#4D4D4D]'>Amount received</span>
                    <span className='font-medium text-[32px] leading-7'>₹23,92,312.19</span>
                </div>
            </div>
        </div>
    )
};