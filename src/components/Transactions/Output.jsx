import React from 'react'
import { PropTypes } from 'prop-types'

export default function Output ({ data }) {
  return (
    <div className='input-output bg-purple-50 '>
      <div className='font-bold' >
        <div>Address</div>
        <div>Value</div>
      </div>

      <div className='font-light' >
        <div>{data.own_addr}</div>
        <div>{data.value} ABC</div>
      </div>
    </div>
  )
}

Output.propTypes = {
  data: PropTypes.object.isRequired
}
