import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

export default function TransactionOverview ({ hash, value, last = false }) {
  return (

    <tr className={(!last ? 'border-b ' : '') + 'bg-white'}>
      <td className="py-4 px-6">
        <Link to={`/transactions/hash/${hash}/`} className="font-bold text-md underline text-blue-600">{hash}</Link>
      </td>
      <td className="py-4 px-6">
        {value} ABC
      </td>

    </tr>

  )
}

TransactionOverview.propTypes = {
  hash: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  last: PropTypes.bool
}
