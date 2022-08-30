import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function BlockDetail () {
  const { height } = useParams()
  console.log('DETIL')
  const [blockAttributes, setBlockAttributes] = useState(null)

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + `blocks/height/${height}`).then(res => {
      console.log(res)
      setBlockAttributes(prevInfo => res.data)
    }).catch(err => console.log(err))
  }, [])

  return blockAttributes
    ? (
      <>
        <h2>Details</h2>
        <div style={{ display: 'flex', marginBottom: '1rem' }}>
          <div className="headings" style={{ marginLeft: '1rem', marginRight: '2rem' }}>
            <div>Hash</div>
            <div>Time Mined</div>
            <div>Number of Transactions</div>
            <div>Merkle Root</div>
            <div>Nonce</div>
          </div>

          <div className="values">
            <div>{blockAttributes.hash}</div>
            <div>{blockAttributes.timestamp.split(/[TZ.]/)[0] + ' ' + blockAttributes.timestamp.split(/[TZ.]/)[1]}</div>
            <div>{blockAttributes.num_transactions}</div>
            <div>{blockAttributes.merkle_hash}</div>
            <div>{blockAttributes.nonce}</div>
          </div>
        </div>

        <h4>Block Transactions</h4>
        {
            blockAttributes.transactions.map((tx, idx) => {
              return <div key={tx.hash} style = {{ marginBottom: '1rem', marginLeft: '2rem' }}><Link to={`/transactions/hash/${tx.hash}`}>{tx.hash}</Link></div>
            })
        }
      </>

      )
    : <div>Loading...</div>
}
