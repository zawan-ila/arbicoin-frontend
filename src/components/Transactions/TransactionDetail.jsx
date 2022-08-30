import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

import Input from './Input'
import Output from './Output'

export default function TransactionDetail () {
  const { txhash } = useParams()
  const [transactionAttributes, setTransactionAttributes] = useState(null)

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + `transactions/hash/${txhash}`).then(res => {
      setTransactionAttributes(prevInfo => res.data)
    }).catch(err => console.log(err))
  }, [])

  return transactionAttributes
    ? (
      <>
        <h2>Details</h2>
        <div style={{ display: 'flex', marginBottom: '1rem' }}>
          <div className="headings" style={{ marginLeft: '1rem', marginRight: '2rem' }}>
            <div>Hash</div>
            <div>Included in Block</div>
          </div>

          <div className="values">
            <div>{transactionAttributes.hash}</div>
            <div><Link to = {`/blocks/${transactionAttributes.block_num}`}>{transactionAttributes.block_num}</Link></div>
          </div>
        </div>

        <h2>Inputs</h2>
        {transactionAttributes.inputs.map((inp, idx) => {
          return <Input key = {idx} data = {inp}/>
        })}

        <h2>Outputs</h2>
        {transactionAttributes.outputs.map((out, idx) => {
          return <Output key = {idx} data = {out}/>
        })}
      </>

      )
    : <div>Loading...</div>
}
