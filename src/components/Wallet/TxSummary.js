import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

export default function TxSummary ({ timestamp, hash, inputs, outputs, usedOutputs }) {
  return (
    <>

      <div className='mx-3 px-3 py-4 my-4 rounded-lg border bg-blue-50 border-gray-200 shadow-md'>
        <div className='py-4 my-4 text-pink-700 text-center'>
          <h3>Hash: {hash}</h3>
          <h3>Time Posted: {timestamp.split(/[TZ.]/)[0] + ' ' + timestamp.split(/[TZ.]/)[1]}</h3>
        </div>

        <div className="my-10 mx-8 p-5 text-center grid grid-cols-2 rounded-lg border bg-blue-50 border-gray-200 shadow-md ">

          <div>
            <h4 className='text-gray-700 uppercase font-semibold'>Inputs</h4>
            {inputs.length
              ? null
              : <div className={' bg-yellow-50' + ' hover:bg-yellow-100' + ' text-center block mx-auto my-6 p-4 max-w-sm rounded-lg border border-gray-200 shadow-md  text-blue-300'}>
                <div className="font-normal text-2xl text-orange-400 ">Coinbase!</div>
              </div>
          }
            {inputs.map(inp => <Card key={inp.gen_transaction_id + String(inp.gen_transaction_index)} addr={inp.own_addr} val={inp.value} color="yellow"/>)}
          </div>

          <div>
            <h4 className='text-gray-700 uppercase font-semibold'>Outputs</h4>
            {outputs.map(out => <Card key={out.gen_transaction_id + String(out.gen_transaction_index)} addr={out.own_addr} val={out.value} color="purple"/>)}
            {usedOutputs.map(usedOut => <Card key={usedOut.gen_transaction_id + String(usedOut.gen_transaction_index)} addr={usedOut.own_addr} val={usedOut.value} color="purple"/>)}

          </div>

        </div>

      </div>
    </>
  )
}

TxSummary.propTypes = {
  inputs: PropTypes.array.isRequired,
  outputs: PropTypes.array.isRequired,
  usedOutputs: PropTypes.array.isRequired,
  hash: PropTypes.string.isRequired,
  timestamp: PropTypes.string

}
