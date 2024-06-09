import React from 'react'
import Header from '../component/shared/header'
import Sidebar from '../component/shared/sidebar'
import SettingsComponent from '../component/settings'

const Setting = () => {
  return (
    <>
       <div className="bg-slate-50">
      <div className="flex max-md:flex-col max-md:gap-0 h-[100vh]" >
        <Sidebar />
        <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:max-w-full">
            <Header title={'Settings'} />
            <SettingsComponent/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Setting