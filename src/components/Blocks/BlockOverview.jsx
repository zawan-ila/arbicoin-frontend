import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { getTimeElapsed } from '../../util.js'

export default function BlockOverview ({ index, timestamp, numTransactions }) {
  return (
    <tr>
      <td><Link to={`/blocks/${index}/`} >{index}</Link></td>
      <td>{getTimeElapsed(timestamp)}</td>
      <td>{numTransactions}</td>
    </tr>
  )
}

BlockOverview.propTypes = {
  index: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  numTransactions: PropTypes.number.isRequired
}
