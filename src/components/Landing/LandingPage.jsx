import React from 'react'
import Overview from './Overview'

export default function LandingPage () {
  return (
    <>
      <div className="flex flex-col m-5 rounded-md bg-gradient-to-r from-cyan-200 to-blue-100 flex-grow">
        <Overview />
      </div>
    </>

  )
}
