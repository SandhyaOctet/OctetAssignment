import React from 'react'
import TableTab from './Table'
import MyInboxTickets from './Table2'

const HeroSection = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 w-full">
            <div className="flex flex-col md:max-w-[170px]">
                <div className="pl-3 py-3 gap-[10px] text-lg font-medium">Tickets</div>
                <div className="bg-basecolor">
                    <p className="py-[5px] px-[10px] text-[#344054]">My Inbox Tickets</p>
                </div>
            </div>
            <div className="w-full md:w-3/4">
                {/* <TableTab /> */}
                <MyInboxTickets />
            </div>
        </div>

    )
}

export default HeroSection
