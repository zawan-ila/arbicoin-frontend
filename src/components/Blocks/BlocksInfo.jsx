import React, { useEffect, useState, useContext } from 'react'
import BlockOverview from './BlockOverview'

import { UserContext } from '../User/handleUser'

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

    <div className="overflow-x-auto relative">
      <table className=" mx-auto mt-10 w-3/4 text-sm text-center text-gray-500">
        <thead className="text-md text-gray-700 uppercase bg-blue-50">
          <tr>
            <th scope="col" className="py-3 px-6">
              Index
            </th>
            <th scope="col" className="py-3 px-6">
              Time
            </th>
            <th scope="col" className="py-3 px-6">
              Number of Transactions
            </th>
          </tr>
        </thead>
        <tbody>
          {blocksDetails.map((blockDetail, index) => {
            return <BlockOverview key = {blockDetail.height} index={blockDetail.height} timestamp={blockDetail.timestamp} numTransactions={blockDetail.num_transactions} last={index + 1 === blocksDetails.length}/>
          })}
        </tbody>
      </table>
    </div>
  )
}
