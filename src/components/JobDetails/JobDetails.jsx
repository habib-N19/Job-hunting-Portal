import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useLoaderData } from 'react-router-dom'
import {
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/solid'
import { addToDb } from '../../utils/fakeDb'
const JobDetails = () => {
  const jobDetails = useLoaderData()
  const {
    id,
    jobTitle,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    salary,
    location,
    contactInformation
  } = jobDetails
  // adding it do local storage
  const handleAppliedJob = id => {
    console.log(id)
    toast.success('Successfully Applied for the Job!')
    addToDb(id)
  }
  return (
    <div className='grid grid-cols-4 gap-4 w-10/12 mx-auto'>
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
      {/* side bar */}
      <div className='col-span-1 min-w-[300px]'>
        <div className=' my-application-card divide-y'>
          <h4 className='my-4 font-bold'>Job Details</h4>
          <div>
            <div className='mt-4'>
              <CurrencyDollarIcon className='apply-icon inline-flex items-center' />
              <span className='font-bold text-[#474747]'>Salary: </span>
              <span className='text-default-color'>{salary}</span>
            </div>
            <div>
              <CalendarDaysIcon className='apply-icon inline-flex items-center' />
              <span className='font-bold text-[#474747]'>Job Title: </span>
              <span className='text-default-color'>{jobTitle}</span>
            </div>

            <h4 className='my-4 font-bold'>Contact Information</h4>
          </div>
          <div className='my-4'>
            <div>
              <PhoneIcon className='apply-icon inline-flex items-center' />
              <span className='font-bold text-[#474747]'>Phone: </span>
              <span className='text-default-color'>
                {contactInformation.phone}
              </span>
            </div>
            <div>
              <EnvelopeIcon className='apply-icon inline-flex items-center' />
              <span className='font-bold text-[#474747] '>Email: </span>
              <span className='text-default-color'>
                {contactInformation.email}
              </span>
            </div>
            <div>
              <MapPinIcon className='apply-icon inline-flex items-center' />
              <span className='font-bold text-[#474747]'>Address: </span>
              <span className='text-default-color'>{location}</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleAppliedJob(id)}
          className='my-btn-primary w-full my-8'
        >
          Apply Now
        </button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default JobDetails
