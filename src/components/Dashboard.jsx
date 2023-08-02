import React from 'react'
import DashboardStartsGrid from './DashboardStartsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'
import RecentOrder from './RecentOrder'
import PopularProduct from './PopularProduct'

const Dashboard = () => {
    return (
        <div className='flex flex-col gap-4'>
            <DashboardStartsGrid />
            <div className='flex flex-row gap-4 w-full'>
            <TransactionChart />
            <BuyerProfileChart/>
            </div>

            <div className='flex flex-row gap-4 w-full'>
               <RecentOrder/>
               <PopularProduct/>
            </div>

        </div>
    )
}

export default Dashboard