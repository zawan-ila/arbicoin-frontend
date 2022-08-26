import React from 'react'
import  "./LandingPage.css"
import Graph from './Graph'
import Overview from './Overview'
import logo from '../../assets/logo.png'

export default function LandingPage() {

  // Just some dummy data for the graph
  const data = [
    {
      month: 'Jan',
      price: 2
    },
    {
      month: 'Feb',
      price: 5
    },
    {
      month: 'Mar',
      price: 1
    },
    {
      month: 'Apr',
      price: 11
    },
    {
      month: 'May',
      price: 14
    },
    {
      month: 'Jun',
      price: 8
    },
    {
      month: 'Jul',
      price: 17
    },
    {
      month: 'Aug',
      price: 12
    },
    {
      month: 'Sep',
      price: 14
    },
    {
      month: 'Oct',
      price: 10
    },
    {
      month: 'Nov',
      price: 6
    },
    {
      month: 'Dec',
      price: 5
    }
  
  ];


  return (
    <>
    <div className="graph-container">
      <Graph data={data} />
      <div className="logo">
        <img src={logo} />
        <span>Arbicoin<br />ABC</span>
      </div>
    </div>
    <Overview />
    </>

  )
}
