import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'
import Spinner from '../Spinner/Spinner'

export default function BlockDetail () {
  const { height } = useParams()
  const [blockAttributes, setBlockAttributes] = useState(null)

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + `blocks/height/${height}/`).then(res => {
      setBlockAttributes(prevInfo => res.data)
    }).catch(err => console.log(err))
  }, [])

  return blockAttributes
    ? (
      <>
        <div className='attr-outer w-3/4'>

          <div className='attr-inner'>Details</div>

          <div>Hash</div>
          <div>{blockAttributes.hash}</div>

          <div>Time Mined</div>
          <div>{blockAttributes.timestamp.split(/[TZ.]/)[0] + ' ' + blockAttributes.timestamp.split(/[TZ.]/)[1]}</div>

          <div>Number of Transactions</div>
          <div>{blockAttributes.num_transactions}</div>

          <div >Merkle Root</div>
          <div>{blockAttributes.merkle_hash}</div>

          <div>Nonce</div>
          <div>{blockAttributes.nonce}</div>

        </div>

        <h4 className='mt-4 w-3/4 mx-auto my-4 text-md text-gray-700 uppercase bg-blue-50 text-center'>Block Transactions</h4>
        {
            blockAttributes.transactions.map((tx, idx) => {
              return <Link key={tx.hash} to={`/transactions/hash/${tx.hash}`} className="mx-auto my-1 underline text-blue-400">{tx.hash}</Link>
            })
        }
      </>

      )
    : <Spinner />
}
