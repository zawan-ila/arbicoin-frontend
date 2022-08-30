import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

export default function TransactionOverview ({ hash, value }) {
  return (
    <tr>
      <td><Link to={`/transactions/hash/${hash}/`} >{hash}</Link></td>
      <td>{value} ABC</td>
    </tr>
  )
}

TransactionOverview.propTypes = {
  hash: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}
