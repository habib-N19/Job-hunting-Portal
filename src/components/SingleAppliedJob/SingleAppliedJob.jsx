import React from 'react'
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'
const SingleAppliedJob = ({ job }) => {
  const navigate = useNavigate()
  const handleJobDetails = id => {
    navigate(`/job/${id}`)
  }
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    location,
    fulltimeOrPartTime,
    salary
  } = job

  return (
    <div className='w-11/12 mx-auto p-4 border mb-6 mt-6 shadow grid grid-cols-3'>
      <div className='col-span-2 inline-flex '>
        <div className='mr-16 p-6 flex justify-center items-center bg-[#F4F4F4]'>
          <img className='w-[200px]  ' src={companyLogo} alt='' />
        </div>
        <div>
          <h2 className='text-lg mb-2 font-bold text-[#474747]'>{jobTitle}</h2>
          <p className='mb-6 font-semibold text-[#757575]'>{companyName}</p>
          <div className='my-4'>
            <span className='py-1 px-2 text-center font-semibold text-blue-500 rounded outline outline-blue-500'>
              {remoteOrOnsite}
            </span>
            <span className='py-1 px-2 text-center font-semibold ml-6 text-blue-500 rounded outline outline-blue-500'>
              {fulltimeOrPartTime}
            </span>
          </div>
          {/* location */}
          <div className='font-semibold text-[#757575] mb-6 mt-4'>
            <span className='inline-flex mr-3'>
              <MapPinIcon className='w-6 h-6 mr-1  stroke-[#757575] fill-none' />
              {location}
            </span>
            <span className='inline-flex ml-3'>
              <CurrencyDollarIcon className='w-6 h-6 stroke-[#757575] fill-none' />
              <span className='mr-2'>Salary: </span>
              {salary}
            </span>
          </div>
        </div>
      </div>
      <div className='col-span-1 grid place-items-center '>
        <button onClick={() => handleJobDetails(id)} className='my-btn-primary'>
          View Details
        </button>
      </div>
    </div>
  )
}

export default SingleAppliedJob
