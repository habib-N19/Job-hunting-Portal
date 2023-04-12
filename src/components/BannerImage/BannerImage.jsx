import React from 'react'
import { useLocation } from 'react-router-dom'
import bannerImg from '../../assets/All-Images/Vector.png'
import bannerImg1 from '../../assets/All-Images/Vector-1.png'
const BannerImage = () => {
  const location = useLocation()
  if (location.pathname === '/') {
    return null
  }
  return (
    <div className='relative z-0 w-11/12 mx-auto mb-8 pb-10'>
      <img
        className='absolute left-0 -mt-5 w-[200px] -z-10'
        src={bannerImg}
        alt=''
      />
      <img
        className='absolute right-0 w-[250px] -mt-20 -z-10'
        src={bannerImg1}
        alt=''
      />
      <p className='text-center font-bold'>HI</p>
    </div>
  )
}

export default BannerImage
