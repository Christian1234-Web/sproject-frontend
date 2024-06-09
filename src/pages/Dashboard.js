import React from 'react'
import Header from '../component/shared/header'
import Sidebar from '../component/shared/sidebar'
import Dashboardomponent from '../component/dashboard'

const Dashboard = () => {
  return (
    <>
       <div className="bg-slate-50">
      <div className="flex max-md:flex-col max-md:gap-0">
        <Sidebar />
        <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:max-w-full">
            <Header title={'Dashboard'} />
            <Dashboardomponent />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard