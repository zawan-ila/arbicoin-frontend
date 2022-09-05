import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../User/handleUser'
import './Overview.css'

export default function Overview () {
  const { myAxios } = useContext(UserContext)
  const [numBlocks, setNumBlocks] = useState(null)
  const [numTransactions, setNumTransactions] = useState(null)

  useEffect(() => {
    myAxios.get(process.env.REACT_APP_BACKEND_URL + 'blocks/length/').then(resp => {
      setNumBlocks(resp.data.length)
    }).catch(e => {
      console.log(e)
    })

    myAxios.get(process.env.REACT_APP_BACKEND_URL + 'transactions/length/').then(resp => {
      setNumTransactions(resp.data.length)
    }).catch(e => console.log(e))
  }, [])

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
