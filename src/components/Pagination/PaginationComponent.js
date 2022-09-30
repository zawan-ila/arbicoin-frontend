import React from 'react'
import PropTypes from 'prop-types'

export default function PaginationComponent ({ next, prev, numPages = 1, currPage = 1, pageChanger }) {
  return (
    <>
      <div className='mt-5 flex justify-center'>
        {numPages ? `Page ${currPage} of ${numPages}` : ''}
      </div>

      <div className="mt-5 flex justify-center">
        {
        prev
          ? <button onClick={e => {
            e.preventDefault()
            pageChanger(pg => pg - 1)
          }} className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mx-2 rounded">
            Prev
          </button>
          : null
      }

        {
        next
          ? <button onClick={e => {
            e.preventDefault()
            pageChanger(pg => pg + 1)
          }} className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mx-2 rounded">
            Next
          </button>
          : null
      }
      </div>
    </>
  )
}

PaginationComponent.propTypes = {
  next: PropTypes.string,
  prev: PropTypes.string,
  pageChanger: PropTypes.func.isRequired,
  numPages: PropTypes.number.isRequired,
  currPage: PropTypes.number.isRequired
}
