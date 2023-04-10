import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex my-6 items-center justify-between w-11/12 mx-auto'>
      <h2 className='text-2xl text-black font-bold'>Job Hunting Portal</h2>
      <ul className='inline-flex gap-4 ml-4 font-semibold '>
        <NavLink className='actives' to='/'>
          Home
        </NavLink>
        <NavLink className='default' to='/statistics' title='statistics'>
          Statistics
        </NavLink>
        <NavLink to='/appliedJob'>Applied Job</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
      </ul>
      <button className='my-btn-primary'>Start Applying</button>
    </div>
  )
}

export default Header
