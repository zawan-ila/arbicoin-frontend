import React from 'react'
import { PropTypes } from 'prop-types'

export default function Input ({ data }) {
  return (
    <div className='flex justify-between mt-3 p-3 text-teal-500 bg-yellow-50 rounded-md '>
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

Input.propTypes = {
  data: PropTypes.object.isRequired
}
