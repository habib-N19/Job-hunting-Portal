import React from 'react'
import accountIcon from '../../assets/Icons/accounts.png'
import businessIcon from '../../assets/Icons/business.png'
import socialIcon from '../../assets/Icons/social-media.png'
import chipIcon from '../../assets/Icons/chip.png'
const JobCategory = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='text-2xl text-center mb-6'>Job Category List</h2>
      <p className='text-default-color text-center my-5'>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      {/* category cards */}
      <div className='flex gap-4 w-11/12 mx-auto my-8'>
        {/* single card */}
        <div className='my-card'>
          <div>
            <img className='w-[40px] h-[40px]' src={accountIcon} alt='' />
          </div>
          <h4 className='text-1xl mt-8 mb-2'>Account & Finance</h4>
          <p className='text-default-color'>300 Jobs Available</p>
        </div>
        <div className='my-card'>
          <div>
            <img className='w-[40px] h-[40px]' src={businessIcon} alt='' />
          </div>
          <h4 className='text-1xl mt-8 mb-2'>Creative Design</h4>
          <p className='text-default-color'>100+ Jobs Available</p>
        </div>
        <div className='my-card'>
          <div>
            <img className='w-[40px] h-[40px]' src={socialIcon} alt='' />
          </div>
          <h4 className='text-1xl mt-8 mb-2'>Marketing & Sales</h4>
          <p className='text-default-color'>150 Jobs Available</p>
        </div>
        <div className='my-card'>
          <div>
            <img className='w-[40px] h-[40px]' src={chipIcon} alt='' />
          </div>
          <h4 className='text-1xl mt-8 mb-2'>Engineering Job</h4>
          <p className='text-default-color'>224 Jobs Available</p>
        </div>
      </div>
    </div>
  )
}

export default JobCategory
