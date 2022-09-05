import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

import Input from './Input'
import Output from './Output'
import '../../common.css'

export default function TransactionDetail () {
  const { txhash } = useParams()
  const [transactionAttributes, setTransactionAttributes] = useState(null)

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + `transactions/hash/${txhash}`).then(res => {
      setTransactionAttributes(prevInfo => res.data)
    }).catch(err => console.log(err))
  }, [])

  function InputOutputMap (arr, Element) {
    return (
      arr.map((data, idx) => {
        return <Element key = {idx} data = {data} />
      })
    )
  }

  return transactionAttributes
    ? (
      <>
        <h2>Details</h2>
        <div className='flex-container'>
          <div className="headings">
            <div>Hash</div>
            <div>Included in Block</div>
          </div>

          <div className="values">
            <div>{transactionAttributes.hash}</div>
            <div><Link to = {`/blocks/${transactionAttributes.block_num}`}>{transactionAttributes.block_num}</Link></div>
          </div>
        </div>

        <h2>Inputs</h2>
        {InputOutputMap(transactionAttributes.inputs, Input)}

        <h2>Outputs</h2>
        {InputOutputMap(transactionAttributes.outputs, Output)}

      </>

      )
    : <div>Loading...</div>
}
