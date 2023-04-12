import Lottie from 'lottie-react'
import bannerAnimation from '../../assets/job-hunting.json'
import JobCategory from '../JobCategory/JobCategory'
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs'

const Home = () => {
  //   console.log(typeof featuredData)
  return (
    <div className='w-11/12 mx-auto'>
      {/* banner section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 w-11/12 mx-auto gap-4 mb-6 items-center'>
        <div className=' order-last sm:order-first'>
          <h1 className='text-5xl sm:3xl md:4xl font-bold mb-4'>
            Closer step to your dream job.Keep moving
            <span class='animate-text bg-gradient-to-r from-blue-500 via-red-500 to-cyan-500 bg-clip-text  font-black text-transparent'>
              {' '}
              Forward
            </span>
          </h1>
          <p className='mb-6 text-default-color'>
            Discover numerous job openings and gain access to all the essential
            details you require to make an informed decision. Your future is
            waiting for you, and we are here to assist you in finding it. Take
            control of your job hunt and streamline the application process from
            beginning to end.
          </p>
          <button className='my-btn-primary mb-4'>Get Started</button>
        </div>
        {/* banner image section */}
        <div className='w-2/3 sm:w-full mx-auto'>
          <Lottie animationData={bannerAnimation} loop={true} />
        </div>
      </div>
      {/* job category section  */}
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  )
}

export default Home
