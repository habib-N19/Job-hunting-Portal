import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {
  const jobDetails = useLoaderData()
  const {
    jobTitle,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences
  } = jobDetails

  return (
    <div className='grid grid-cols-5 gap-4 w-11/12 mx-auto '>
      {/* details */}
      <div className='col-span-3'>
        <p className='mb-6 text-default-color'>
          <span className='font-bold text-[#1A1919]'>Job Description:</span>
          {jobDescription}
        </p>
        <p className='mb-6 text-default-color'>
          <span className='font-bold text-[#1A1919]'>Job Responsibility: </span>
          {jobResponsibility}
        </p>
        <p className='mb-6 text-default-color'>
          <span className='font-bold text-[#1A1919]'>
            Educational Requirements:
          </span>
          {educationalRequirements}
        </p>
        <p className='mb-6 text-default-color'>
          <span className='font-bold text-[#1A1919]'>Experiences: </span>
          {experiences}
        </p>
      </div>
      <div className='col-span-2 text-center'>side bar</div>
    </div>
  )
}

export default JobDetails
