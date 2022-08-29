import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './BlocksInfo.css'
import BlockOverview from './BlockOverview'

export default function Blocks () {
  const [blocksDetails, setBlocksDetails] = useState([])

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + 'blocks/all/').then(res => {
      setBlocksDetails(prevDetails => res.data)
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <>
    <div className='title'>Blocks</div>
    <table>
    <thead>
    <tr>
      <th>Index</th>
      <th>Time</th>
      <th>Number of Transactions</th>
    </tr>
    </thead>
    <tbody>
    {blocksDetails.map((blockDetail, index) => {
      return <BlockOverview key = {blockDetail.height} index={blockDetail.height} timestamp={blockDetail.timestamp} numTransactions={blockDetail.num_transactions}/>
    })}
    </tbody>
    </table>
    </>

  )
}
