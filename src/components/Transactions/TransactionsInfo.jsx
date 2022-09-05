import React, { useEffect, useState, useContext } from 'react'
import TransactionOverview from './TransactionOverview'
import { UserContext } from '../User/handleUser'

import './TransactionsInfo.css'

export default function Transactions () {
  const [transactionsDetails, setTransactionsDetails] = useState([])
  const { myAxios } = useContext(UserContext)
  useEffect(() => {
    myAxios.get(process.env.REACT_APP_BACKEND_URL + 'transactions/all/').then(res => {
      setTransactionsDetails(prevDetails => res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <div className='title'>Transactions</div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {transactionsDetails.map((transactionDetail, index) => {
            const val = transactionDetail.outputs.reduce((a, b) => a + b.value, 0)
            return <TransactionOverview key = {transactionDetail.hash} hash={transactionDetail.hash} value={val}/>
          })}
        </tbody>
      </table>
    </>

  )
}
