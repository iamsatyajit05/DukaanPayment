import React from 'react';
import { SearchIcon, SortIcon, DownloadIcon, DropdownIcon, HeaderIcon2, InformationIcon } from '../../assets/Icons';

export default function Overview() {
    const transactions = Array.from({ length: 20 }, () => [
        {
            id: '281209 ',
            date: '7 July, 2023',
            amount: '1,278.23',
            fees: '22'
        }
    ]).flat();

    // Not working
    // const formattedNumber = (numberToFormat) => {
    //     return numberToFormat.toLocaleString('en-US', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 })
    // }

    return (
        <div className='space-y-6'>
            <div>
                <span className='text-xl font-medium'>Transactions | This Month</span>
            </div>
            <div className='bg-white rounded-lg p-3 pb-6 space-y-6' style={{
                boxShadow: '0 2px 6px 0 rgba(26,24,30,0.04)'
            }}>
                <div className='space-y-3'>
                    <div className='flex justify-between'>
                        <div className='w-[248px]'>
                            <div className='flex items-center gap-2 px-4 py-[9px] w-[400px] h-full border border-[#D9D9D9] rounded'>
                                <SearchIcon width={14} height={14} fillColor={'#808080'} />
                                <input className='w-full text-sm text-[#808080] placeholder:text-[#808080] bg-transparent outline-none' type="text" placeholder='Search by order ID...  ' />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <button className='px-3 py-[6px] h-9 flex justify-center items-center gap-[6px] rounded bg-white border border-[#D9D9D9]'>
                                <span className='text-[#4D4D4D]'>Sort</span>
                                <span>
                                    <SortIcon width={14} height={12} fillColor={'#4D4D4D'} />
                                </span>
                            </button>
                            <button className='w-9 h-9 flex justify-center items-center rounded bg-white border border-[#D9D9D9]'>
                                <DownloadIcon width={18} height={18} fillColor={'#4D4D4D'} />
                            </button>
                        </div>
                    </div>
                    <div>
                        <table className="min-w-full table">
                            <thead className="border-separate text-[#4D4D4D]">
                                <tr className='space-x-10'>
                                    <th scope="col" className="rounded-l bg-[#F2F2F2] w-1/4 text-left text-sm font-medium py-[10px] pl-3">
                                        Order ID
                                    </th>
                                    <th scope="col" className="bg-[#F2F2F2] w-1/4 text-left text-sm font-medium py-[10px]">
                                        <div className='flex items-center gap-1'>
                                            Order date
                                            <HeaderIcon2 width={8} height={8} fillColor={'#4D4D4D'} />
                                        </div>
                                    </th>
                                    <th scope="col" className="bg-[#F2F2F2] w-1/4 text-right text-sm font-medium py-[10px]">
                                        Order amount
                                    </th>
                                    <th scope="col" className="rounded-r bg-[#F2F2F2] w-1/4 text-right text-sm font-medium py-[10px] pr-3">
                                        <div className='flex justify-end items-center gap-1 cursor-pointer gap-1'>
                                            Transaction fees
                                            <InformationIcon width={14} height={14} fillColor={'#4D4D4D'} />
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {transactions.map((transaction) => (
                                    <tr
                                        key={transaction.id}
                                        className="h-10 border-b-[1px] border-b-[#E6E6E6] hover:bg-gray-50"
                                    >
                                        <td className="text-sm font-medium text-[#146EB4] py-[14px] pl-3">
                                            <a href="/">#{transaction.id}</a>
                                        </td>
                                        <td className="text-sm py-[14px]">
                                            {transaction.date}
                                        </td>
                                        <td className="text-sm text-right py-[14px]">
                                            ₹{transaction.amount}
                                        </td>
                                        <td className="text-sm text-right py-[14px] pr-3">
                                            ₹{transaction.fees}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center items-center gap-6'>
                        <button className='p-[6px] pr-3 h-9 flex justify-center items-center gap-[6px] rounded bg-white border border-[#D9D9D9]'>
                            <span className='rotate-90'>
                                <DropdownIcon width={14} height={12} fillColor={'#4D4D4D'} />
                            </span>
                            <span className='text-[#4D4D4D]'>Previous</span>
                        </button>
                        <div className='flex gap-2'>
                            <button className='w-7 h-7 py-[2px] flex justify-center items-center'>
                                <span className='text-[#4D4D4D] text-sm font-medium'>1</span>
                            </button>
                            <button className='w-7 h-7 py-[2px] flex justify-center items-center'>
                                <span className='text-[#4D4D4D] text-sm font-medium'>...</span>
                            </button>
                            <button className='w-7 h-7 py-[2px] flex justify-center items-center rounded bg-[#146EB4]'>
                                <span className='text-white text-sm font-medium'>10</span>
                            </button>
                            <button className='w-7 h-7 py-[2px] flex justify-center items-center'>
                                <span className='text-[#4D4D4D] text-sm font-medium'>11</span>
                            </button>
                            <button className='w-7 h-7 py-[2px] flex justify-center items-center'>
                                <span className='text-[#4D4D4D] text-sm font-medium'>12</span>
                            </button>
                            <button className='w-7 h-7 py-[2px] flex justify-center items-center'>
                                <span className='text-[#4D4D4D] text-sm font-medium'>13</span>
                            </button>
                            <button className='w-7 h-7 py-[2px] flex justify-center items-center'>
                                <span className='text-[#4D4D4D] text-sm font-medium'>14</span>
                            </button>
                            <button className='w-7 h-7 py-[2px] flex justify-center items-center'>
                                <span className='text-[#4D4D4D] text-sm font-medium'>15</span>
                            </button>
                            <button className='w-7 h-7 py-[2px] flex justify-center items-center'>
                                <span className='text-[#4D4D4D] text-sm font-medium'>16</span>
                            </button>
                            <button className='w-7 h-7 py-[2px] flex justify-center items-center'>
                                <span className='text-[#4D4D4D] text-sm font-medium'>17</span>
                            </button>
                            <button className='w-7 h-7 py-[2px] flex justify-center items-center'>
                                <span className='text-[#4D4D4D] text-sm font-medium'>18</span>
                            </button>
                        </div>
                        <button className='p-[6px] pl-3  h-9 flex justify-center items-center gap-[6px] rounded bg-white border border-[#D9D9D9]'>
                            <span className='text-[#4D4D4D]'>Next</span>
                            <span className='-rotate-90'>
                                <DropdownIcon width={14} height={12} fillColor={'#4D4D4D'} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};