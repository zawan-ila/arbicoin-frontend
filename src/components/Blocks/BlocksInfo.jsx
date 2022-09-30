import React, { useEffect, useState, useContext, useRef } from 'react'

import { useLocation } from 'react-router-dom'

import BlockOverview from './BlockOverview'
import PaginationComponent from '../Pagination/PaginationComponent'
import Spinner from '../Spinner/Spinner'

import axios from 'axios'

export default function Blocks () {
  const [blocksDetails, setBlocksDetails] = useState(null)
  const location = useLocation()

  const [currPage, setCurrPage] = useState(1)
  const [numPages, setNumPages] = useState(null)

  const [prefixToSearch, setPrefixToSearch] = useState('')

  const nextUrl = useRef(null)
  const prevUrl = useRef(null)

  useEffect(() => {
    const controller = new AbortController()

    axios.get(process.env.REACT_APP_BACKEND_URL + `blocks/all/?page=${currPage}&prefix=${prefixToSearch}`).then(res => {
      setBlocksDetails(res.data.results)
      nextUrl.current = res.data.next
      prevUrl.current = res.data.previous

      if (numPages === null) {
        setNumPages(res.data.results && Math.ceil(res.data.count / res.data.results.length))
      }
    }).catch(err => {
      console.log(err)
    })

    return () => {
      controller.abort()
    }
  }, [location.key, currPage, prefixToSearch])

  return blocksDetails
    ? (
      <>
        <input onChange={e => {
          setPrefixToSearch(e.target.value)
          setNumPages(null)
        }} type="search" className="block p-4 pl-10 w-5/6 mx-auto my-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  " placeholder="Search for a block(by height)" value={prefixToSearch} />

        <div className="overflow-x-auto relative">
          <table className=" mx-auto mt-10 w-3/4 text-sm text-center text-gray-500">
            <thead className="text-md text-gray-700 uppercase bg-blue-50">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Index
                </th>
                <th scope="col" className="py-3 px-6">
                  Time
                </th>
                <th scope="col" className="py-3 px-6">
                  Number of Transactions
                </th>
              </tr>
            </thead>
            <tbody>
              {blocksDetails.map((blockDetail, index) => {
                return <BlockOverview key = {blockDetail.height} index={blockDetail.height} timestamp={blockDetail.timestamp} numTransactions={blockDetail.num_transactions} last={index + 1 === blocksDetails.length}/>
              })}
            </tbody>
          </table>
          <PaginationComponent currPage={currPage} numPages={numPages} next={nextUrl.current} prev={prevUrl.current} pageChanger={setCurrPage}/>

        </div>

      </>
      )
    : <Spinner />
}
