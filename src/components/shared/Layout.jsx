import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
            <div className={`${isSidebarOpen ? '' : 'hidden'} md:block`}>
                <SideBar />
            </div>
            <div className='flex-1'>
                <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className='p-4'>{<Outlet />}</div>
            </div>
        </div>
    )
}

export default Layout