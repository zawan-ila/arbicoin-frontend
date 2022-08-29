import React from 'react'
import './LandingPage.css'
import Graph from './Graph'
import Overview from './Overview'
import logo from '../../assets/logo.png'
import { data } from '../../data/graphData'

export default function LandingPage () {
  return (
    <>
      <div className="graph-container">
        <Graph data={data} />
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>Arbicoin<br />ABC</span>
        </div>
      </div>
      <Overview />
    </>

  )
}
