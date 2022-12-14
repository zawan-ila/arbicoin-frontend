import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

import Input from './Input'
import Output from './Output'

import axios from 'axios'

export default function TransactionDetail () {
  const location = useLocation()
  const { txhash } = useParams()
  const [transactionAttributes, setTransactionAttributes] = useState(null)

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + `transactions/hash/${txhash}/`).then(res => {
      setTransactionAttributes(prevInfo => res.data)
    }).catch(err => console.log(err))
  }, [])

  function InputOutputMap (arr, Element) {
    if (arr.length === 0 && Element === Input) {
      return <div className='text-2xl font-bold text-orange-300'>Coinbase!</div>
    }
    return (
      arr.map((data, idx) => {
        return <Element key = {idx} data = {data} />
      })
    )
  }

  return transactionAttributes
    ? (
      <>

        <div className='attr-outer w-5/6'>
          <div className='attr-inner'>Details</div>

          <div>Hash</div>
          <div>{transactionAttributes.hash}</div>

          <div>Time Posted</div>
          <div>{transactionAttributes.timestamp.split(/[TZ.]/)[0] + ' ' + transactionAttributes.timestamp.split(/[TZ.]/)[1]}</div>

          <div>Included in Block</div>
          { transactionAttributes.block_num != null
            ? <div><Link to = {`/blocks/${transactionAttributes.block_num}`} className="mx-auto my-1 underline text-blue-400">{transactionAttributes.block_num}</Link></div>
            : <div className="mx-auto my-1 underline text-blue-400">{'Unmined'}</div>

          }

        </div>

        <div className='w-5/6 mx-auto'>
          <h2 className="input-output-headers">Inputs</h2>
          {InputOutputMap(transactionAttributes.inputs, Input)}

          <h2 className="input-output-headers">Outputs</h2>
          {InputOutputMap(transactionAttributes.outputs, Output)}
          {InputOutputMap(transactionAttributes.used_outputs, Output)}
        </div>
      </>

      )
    : <div>Loading...</div>
}
