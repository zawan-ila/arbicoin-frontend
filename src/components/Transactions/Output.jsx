import React from 'react'
import { PropTypes } from 'prop-types'

export default function Output ({ data }) {
  return (
    <div className='flex justify-between mt-3 p-3 text-teal-500 bg-purple-50 rounded-md '>
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
