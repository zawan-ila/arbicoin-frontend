import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Card ({ addr, val, color }) {
  return (
    <div className={` bg-${color}-50` + ` hover:bg-${color}-100` + ' text-center block mx-auto my-6 p-4 max-w-sm rounded-lg border border-gray-200 shadow-md  text-blue-300'}>
      <Link to={`/wallet/${addr}`} className="mb-2 font-bold tracking-tight text-teal-500 text-center underline hover:no-underline hover:italic">
        {addr.slice(0, 7) + '...' + addr.slice(-7)}
      </Link>
      <div className="font-normal text-gray-400 ">{val} ABC</div>
    </div>
  )
}

Card.propTypes = {
  addr: PropTypes.string.isRequired,
  val: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired

}
