import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import StatsCards from './common/StatsCards';
import DashboardTable from './DashboardTable';
import axios from 'axios';
import ClientForm from './ClientForm';
import { API_URL } from './common/Config';
import { useNavigate } from 'react-router-dom';
import { APP_NAME } from './common/Config';


export default function Dashboard({dashboardContent = "defaultdata"  }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [totalClientCount, setTotalClientCount] = useState('');
    const [followUpCount, setFollowUpCount] = useState('');
    const [overDueCount, setOverDueCount] = useState('');
    const [contactCount, setContactCount] = useState('');
    console.log( dashboardContent );
    let content;

    const navigate = useNavigate();

    if (dashboardContent === "dashboardTable") {
      content = <DashboardTable className="px-6 mt-6" />;

    } else {
        content = <ClientForm className="px-6 mt-6" />;
    }
 
    console.log(content);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            if (!token) {
                console.log('No token found in localStorage');
                navigate(`${APP_NAME}/`);
                return;
            }

            try {
                const response = await axios.get(API_URL+'/dashboard', {
                    headers: {
                        'Authorization': token // Include the token in the request headers
                    }
                });

                setTotalClientCount(response.data?.data?.TotalClientCount);
                setFollowUpCount(response.data?.data?.FollowUpCount);
                setOverDueCount(response.data?.data?.OverDueCount);
                setContactCount(response.data?.data?.ContactCount);
                console.log("client contact", response.data?.data?.ClientContact)

            } catch (error) {
                console.log("Error fetching dashboard data:", error.response ? error.response.data : error.message);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="flex maindiv">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`flex flex-col w-10/12  flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
                <Header toggleSidebar={toggleSidebar} />
                <main className=" px-6 mt-6 " >
                    <h1 className='text-3xl font-normal mb-6'>Epitome Sales Dashboard</h1>
                    <StatsCards
                        totalClientCount={totalClientCount}
                        followUpCount={followUpCount}
                        overDueCount={overDueCount}
                        contactCount={contactCount}
                    />
                </main>
                {content}

            </div>
        </div>
    );
}
