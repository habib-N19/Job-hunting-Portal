import { FeaturedContext } from '../../App'
import React, { useContext, useEffect, useState } from 'react'
import { getStoredId } from '../../utils/fakeDb'

import SingleAppliedJob from '../singleAppliedJob/SingleAppliedJob'

const AppliedJob = () => {
  const featuredData = useContext(FeaturedContext)
  const storedIdData = getStoredId()
  const matchedData = []
  for (const id in storedIdData) {
    const foundJobId = featuredData.find(strIds => strIds.id === id)
    matchedData.push(foundJobId)
  }
  const [filterData, setFilter] = useState(matchedData)
  const [selectedValue, setSelectedValue] = useState(null)

  const handleFilterChange = event => {
    setSelectedValue(event.target.value)
  }

  useEffect(() => {
    let filteredData = matchedData
    if (selectedValue === 'Remote') {
      filteredData = matchedData.filter(jb => jb.remoteOrOnsite === 'Remote')
    } else if (selectedValue === 'Onsite') {
      filteredData = matchedData.filter(jb => jb.remoteOrOnsite === 'Onsite')
    }
    if (JSON.stringify(filteredData) !== JSON.stringify(filterData)) {
      setFilter(filteredData)
    }
  }, [matchedData, selectedValue, filterData])

  return (
    <div className=''>
      <div className='flex justify-end w-11/12 mx-auto'>
        <select
          className='  text-default-color p-3 bg-gray-100 font-semibold rounded'
          value={selectedValue}
          onChange={handleFilterChange}
        >
          <option value='' selected disabled>
            Filter By
          </option>
          <option value=''>See All</option>
          <option value='Remote'>Remote</option>
          <option value='Onsite'>Onsite</option>
        </select>
      </div>

      {filterData.map(job => (
        <SingleAppliedJob key={job.id} job={job}></SingleAppliedJob>
      ))}
    </div>
  )
}

export default AppliedJob
