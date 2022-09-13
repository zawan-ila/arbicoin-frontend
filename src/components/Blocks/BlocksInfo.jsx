import React, { useEffect, useState, useContext } from 'react'
import BlockOverview from './BlockOverview'

import { UserContext } from '../User/handleUser'

import './BlocksInfo.css'

export default function Blocks () {
  const [blocksDetails, setBlocksDetails] = useState([])
  const { myAxios } = useContext(UserContext)
  useEffect(() => {
    myAxios.get(process.env.REACT_APP_BACKEND_URL + 'blocks/all/').then(res => {
      setBlocksDetails(prevDetails => res.data)
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
