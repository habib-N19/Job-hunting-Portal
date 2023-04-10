import React from 'react'
import Lottie from 'lottie-react'
import bannerAnimation from '../../assets/job-hunting.json'
import JobCategory from '../JobCategory/JobCategory'

{
  /*  */
}
const Home = () => {
  return (
    <div className='w-11/12 mx-auto'>
      {/* banner section */}
      <div className='grid grid-cols-2 w-11/12 mx-auto gap-4 items-center'>
        <div>
          <h1 className='text-5xl font-bold mb-4'>
            Closer step to your dream job. Keep moving forward
          </h1>
          <p className='mb-6'>
            Discover numerous job openings and gain access to all the essential
            details you require to make an informed decision. Your future is
            waiting for you, and we are here to assist you in finding it. Take
            control of your job hunt and streamline the application process from
            beginning to end.
          </p>
          <button className='my-btn-primary'>Get Started</button>
        </div>
        {/* banner image section */}
        <div>
          <Lottie animationData={bannerAnimation} loop={true} />
        </div>
      </div>
      {/* job category section  */}
      <JobCategory></JobCategory>
    </div>
  )
}

export default Home
