import React from 'react'
import Header from '../component/shared/header'
import Sidebar from '../component/shared/sidebar'
import Message from '../component/messages'

const Profile = () => {
  return (
    <>
       <div className="bg-slate-50">
      <div className="flex max-md:flex-col max-md:gap-0">
        <Sidebar />
        <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:max-w-full">
            <Header title={'Messages'} />
            <Message />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile