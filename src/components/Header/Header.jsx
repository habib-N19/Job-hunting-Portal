import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import BannerImage from '../BannerImage/BannerImage'

const Header = () => {
  const location = useLocation()
  return (
    <div div className='banner w-11/12 mx-auto mb-8'>
      <div className=' relative flex my-6 items-center justify-between w-11/12 mx-auto z-20'>
        <NavLink to='/'>
          <h1 class=' animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-3xl sm:2xl font-black text-transparent'>
            Job Hunting Portal
          </h1>
        </NavLink>
        <ul className='inline-flex gap-4 ml-4 font-semibold '>
          {/* not rendering home icon in home */}
          {location.pathname !== '/' && (
            <NavLink className='actives' to='/'>
              Home
            </NavLink>
          )}

          <NavLink className='default' to='/statistics' title='statistics'>
            Statistics
          </NavLink>
          <NavLink to='/appliedJob'>Applied Job</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
        </ul>
        <NavLink to='/'>
          <button className='my-btn-primary hidden sm:block'>
            Start Applying
          </button>
        </NavLink>
      </div>
      <BannerImage></BannerImage>
    </div>
  )
}

export default Header
