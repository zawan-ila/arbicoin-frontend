import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { getTimeElapsed } from '../../util.js'

export default function BlockOverview ({ index, timestamp, numTransactions, last = false }) {
  return (

    <tr className={(!last ? 'border-b ' : '') + 'bg-white'}>
      <td className="py-4 px-6">
        <Link to={`/blocks/${index}/`} className="font-bold text-md underline text-blue-600">{index}</Link>
      </td>
      <td className="py-4 px-6">
        {getTimeElapsed(timestamp)}
      </td>
      <td className="py-4 px-6">
        {numTransactions}
      </td>
    </tr>

  )
}

BlockOverview.propTypes = {
  index: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  numTransactions: PropTypes.number.isRequired,
  last: PropTypes.bool
}
