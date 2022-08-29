import React from 'react'
import { PropTypes } from 'prop-types'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'

export default function App ({ data }) {
  return (
    <ResponsiveContainer height="100%" width="100%" className="plz-up">
      <AreaChart
    data={data}
    margin={{
      top: 5,
      right: 0,
      left: 0,
      bottom: 5
    }}
  >

        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="green" stopOpacity={0.8}/>
            <stop offset="75%" stopColor="green" stopOpacity={0.1}/>
            <stop offset="95%" stopColor="green" stopOpacity={0}/>
          </linearGradient>

        </defs>
        <Area type="monotone" dataKey="price" stroke="green" strokeWidth={2} fill="url(#grad)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

App.propTypes = {
  data: PropTypes.array.isRequired
}
