import React from 'react'

const Header = ({title=''}) => {
  return (
    <div className='bg-gray-200 shadow-md px-4 py-3'>
      <h1 className='text-xl font-bold text-gray-800'>{`${title} Dashboard`}</h1>
    </div>
  )
};

export default Header;
