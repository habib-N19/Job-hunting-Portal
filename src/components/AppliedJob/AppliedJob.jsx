import { FeaturedContext } from '../../App'
import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { featuredCardData } from '../../loaders/getFeaturedData'
import { getStoredId } from '../../utils/fakeDb'
import { key } from 'localforage'
import SingleAppliedJob from '../singleAppliedJob/SingleAppliedJob'

const AppliedJob = () => {
  const featuredData = useContext(FeaturedContext)
  // console.log(featuredData)
  const storedIdData = getStoredId()
  // console.log(storedIdData)
  const matchedData = []
  for (const id in storedIdData) {
    const foundJobId = featuredData.find(strIds => strIds.id === id)
    // console.log(foundJobId)
    matchedData.push(foundJobId)
  }
  // console.log(matchedData)

  // getStoredId()
  // step-1 setting a loader,
  // step -2 find match id with get local storage id
  //push them into an array
  // putting it to a loader
  /**
   *destructing it to the applied job list

   */

  // const storedJobId = getAppliedList()
  // console.log(storedJobId)

  return (
    <div>
      from applied jobs
      {matchedData.map(job => (
        <SingleAppliedJob key={job.id} job={job}></SingleAppliedJob>
      ))}
    </div>
  )
}

export default AppliedJob
