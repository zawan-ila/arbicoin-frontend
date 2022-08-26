import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import "./Overview.css"

export default function Overview() {

  const [numBlocks, setNumBlocks] = useState(0)
  const [numTransactions, setNumTransactions] = useState(0)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/blocks/length').then(resp => {
        setNumBlocks(resp.data.length)
    }).catch(e => console.log(e))

    axios.get('http://127.0.0.1:8000/transactions/length').then(resp => {
      setNumTransactions(resp.data.length)
    }).catch(e => console.log(e))

  })  

  return (
    <div className="chain-overview">
      <div>
        <span>{numBlocks}</span><br />
        <Link to="/blocks" className='text-link'>Blocks</Link>
      </div>

      <div>
        <span>{numTransactions}</span><br />
        <Link to="/transactions" className='text-link'>Transactions</Link>
      </div>
    </div>
  )
}
