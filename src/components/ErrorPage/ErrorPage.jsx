import React from 'react'
import Lottie from 'lottie-react'
import errorAnimation from '../../assets/404-not-found-page.json'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div>
      <Lottie
        className='w-8/12 h-[400px] mx-auto'
        animationData={errorAnimation}
        loop={true}
      />
      <div className='max-w-md text-center mx-auto mt-16'>
        <Link to='/' className='my-btn-primary'>
          Back to homepage
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
