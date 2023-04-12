import React, { useState, useContext } from 'react'
import { FeaturedContext } from '../../App'
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'

const FeaturedJobs = () => {
  const featuredData = useContext(FeaturedContext)
  const navigate = useNavigate()
  const [numToShow, setNumToShow] = useState(4)

  const handleJobDetails = id => {
    navigate(`/job/${id}`)
  }

  const handleSeeMore = () => {
    setNumToShow(featuredData.length)
  }

  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='text-4xl text-center font-bold mb-4'>Featured Jobs</h2>
      <p className='text-default-color mb-8 text-center'>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      {/* featured card  */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        {featuredData.slice(0, numToShow).map(fData => (
          <div key={fData.id} className='my-featured-card'>
            <div className='my-8 w-[120px]'>
              <img className='w-[120px] ' src={fData.companyLogo} alt='' />
            </div>
            <h2 className='text-lg mb-2 font-bold text-[#474747]'>
              {fData.jobTitle}
            </h2>
            <p className='mb-6 text-[#757575]'>{fData.companyName}</p>
            {/* outlined job type section */}
            <div className='my-4'>
              <span className='py-1 px-2 text-center font-semibold text-blue-500 rounded outline outline-blue-500'>
                {fData.remoteOrOnsite}
              </span>
              <span className='py-1 px-2 text-center font-semibold ml-6 text-blue-500 rounded outline outline-blue-500'>
                {fData.fulltimeOrPartTime}
              </span>
            </div>
            {/* location */}
            <div className='font-semibold flex flex-col sm:flex-row text-[#757575] mb-6 mt-4'>
              <div className='sm:inline-flex mb-2'>
                <MapPinIcon className='w-6 h-6 mr-1 inline-flex  stroke-[#757575] fill-none' />
                <span>{fData.location}</span>
              </div>
              <div className='inline-flex'>
                <CurrencyDollarIcon className='w-6 h-6 stroke-[#757575] fill-none' />
                <span className='mr-2'>Salary: </span>
                {fData.salary}
              </div>
            </div>
            <div className='mt-auto mb-4'>
              <button
                onClick={() => handleJobDetails(fData.id)}
                className='my-btn-primary'
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center my-16'>
        {numToShow < featuredData.length && (
          <button onClick={handleSeeMore} className='my-btn-primary'>
            See More
          </button>
        )}
      </div>
    </div>
  )
}

export default FeaturedJobs
