import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const SimpleAreaChart = () => {
  const assignmentsMarks = [
    { assignment: 'assignment-1', mark: 60 },
    { assignment: 'assignment-2', mark: 60 },
    { assignment: 'assignment-3', mark: 50 },
    { assignment: 'assignment-4', mark: 60 },
    { assignment: 'assignment-5', mark: 60 },
    { assignment: 'assignment-6', mark: 60 },
    { assignment: 'assignment-7', mark: 60 }
  ]
  return (
    <AreaChart
      width={1000}
      height={400}
      data={assignmentsMarks}
      margin={{ top: 45, right: 10, left: 30, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='assignment' />
      <YAxis />
      <Tooltip />
      <Area type='monotone' dataKey='mark' stroke='#824ffb' fill='#8884d8' />
    </AreaChart>
  )
}

export default SimpleAreaChart
