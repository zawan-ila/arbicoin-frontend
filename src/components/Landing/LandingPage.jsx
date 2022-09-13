import React from 'react'
import Overview from './Overview'

export default function LandingPage () {
  return (
    <>
      <div className="flex flex-col m-5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-400 flex-grow">
        <Overview />
      </div>
    </>

  )
}
