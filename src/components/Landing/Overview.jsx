import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../User/handleUser'

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
    <div className="flex-grow flex justify-around items-center font-bold text-center mt-5 text-5xl text-yellow-400">
      <div className='overview-component'>
        <span>{numBlocks}</span><br />
        <Link to="/blocks" className='underline'>Blocks</Link>
      </div>

      <div className='overview-component'>
        <span>{numTransactions}</span><br />
        <Link to="/transactions" className='underline'>Transactions</Link>
      </div>
    </div>
  )
}
