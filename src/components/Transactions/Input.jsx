import React from 'react'
import { PropTypes } from 'prop-types'

import '../../common.css'

export default function Input ({ data }) {
  return (
    <div className='flex-container'>
      <div className="headings">
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
