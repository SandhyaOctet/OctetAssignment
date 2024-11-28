import React from 'react'
import MyInboxTickets from './Table2'

const HeroSection = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 w-full">
            
            <div className="w-full">
                <MyInboxTickets />
            </div>
        </div>

    )
}

export default HeroSection
