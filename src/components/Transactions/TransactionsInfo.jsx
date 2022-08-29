import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './TransactionsInfo.css'
import TransactionOverview from './TransactionOverview'

export default function Transactions () {
  const [transactionsDetails, setTransactionsDetails] = useState([])

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + 'transactions/all/').then(res => {
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
