import React from 'react'
import { PropTypes } from 'prop-types'

export default function Input ({ data }) {
  return (
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      <div className="headings" style={{ marginLeft: '1rem', marginRight: '2rem' }}>
        <div>Address</div>
        <div>Value</div>
      </div>

      <div className="values">
        <div>{data.own_addr}</div>
        <div>{data.value} ABC</div>
      </div>
    </div>
  )
}

Input.propTypes = {
  data: PropTypes.object.isRequired
}
