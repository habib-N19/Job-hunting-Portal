import React, { useEffect, useState } from 'react'
// import { jobCategoryLoader } from '../../loaders/jobCategory'
const JobCategory = () => {
  //   console.log(typeof jobCategories)
  //   console.log(jobCategoryLoader)
  const [jobCategoryData, setJobCategoryData] = useState([])
  useEffect(() => {
    const fetchJobData = async () => {
      const res = await fetch('jobCategory.json')
      const jobData = await res.json()
      setJobCategoryData(jobData)
    }
    fetchJobData()
  }, [])

  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='text-2xl text-center mb-6'>Job Category List</h2>
      <p className='text-default-color text-center my-5'>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      {/* category cards */}
      <div className='flex gap-4 w-11/12 mx-auto my-8'>
        {/* map through job categories and render a card for each */}
        {jobCategoryData.map(job => (
          <div key={job.id} className='my-card'>
            <div>
              <img className='w-[40px] h-[40px]' src={job.logo} alt='' />
            </div>
            <h4 className='text-1xl mt-8 mb-2'>{job.name}</h4>
            <p className='text-default-color'>
              {job.jobsAvailable}+ Jobs Available
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobCategory
