import React from 'react';
import { FaChartBar, FaUsers, FaClipboardList, FaStar } from 'react-icons/fa';

const StatsCards = ({ totalClientCount, followUpCount, overDueCount, contactCount }) => {
    const cardsData = [
        { icon: FaChartBar, bgColor: 'bg-red-600', title: "Total Clients", value: totalClientCount },
        { icon: FaUsers, bgColor: 'bg-amber-500', title: "Follow Up", value: followUpCount },
        { icon: FaStar, bgColor: 'bg-red-600', title: "Over Due", value: overDueCount },
        { icon: FaClipboardList, bgColor: 'bg-amber-500', title: "Total Contact", value: contactCount },
    ];

    return (
        <div className="flex flex-col md:flex-row md:space-x-4">
            {cardsData.map((card, index) => (
                <div 
                    key={index} 
                    className="w-full h-24 bg-white mb-4 md:mb-0 rounded-md drop-shadow-lg flex items-center p-2"
                >
                    <div className={`w-16 h-16 flex justify-center items-center ml-2 rounded-md text-white ${card.bgColor}`}>
                        <card.icon size={40} />
                    </div>
                    <div className="pl-5 flex-grow">
                        <p className="text-xl font-semibold text-orange-800">{card.title}</p>
                        <h1 className="text-2xl font-semibold">{card.value}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;
