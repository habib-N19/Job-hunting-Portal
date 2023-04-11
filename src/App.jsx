import { createContext, useState } from 'react'
import Header from './components/Header/Header'
import { Outlet, useLoaderData } from 'react-router-dom'

export const FeaturedContext = createContext([])
const App = () => {
  const { featuredData } = useLoaderData()
  // console.log(featuredData)
  return (
    <FeaturedContext.Provider value={featuredData}>
      <div className='App'>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </FeaturedContext.Provider>
  )
}

export default App
