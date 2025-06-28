import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const MainLayout = ({children, title}) => {
  return (
    <div className='flex h-screen'>
      <Sidebar/>
      <div className='flex flex-col flex-1 '>
        <Header title={title}/>
        <main className='p-4 w-full overflow-auto'>{children}</main>
      </div>
    </div>
  )
}

export default MainLayout
