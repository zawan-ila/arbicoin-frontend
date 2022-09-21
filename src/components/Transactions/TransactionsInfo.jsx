import React, { useEffect, useState, useContext, useRef } from 'react'
import TransactionOverview from './TransactionOverview'
import { UserContext } from '../User/handleUser'
import { useLocation } from 'react-router-dom'

import PaginationComponent from '../Pagination/PaginationComponent'

export default function Transactions () {
  const [transactionsDetails, setTransactionsDetails] = useState(null)

  const [currPage, setCurrPage] = useState(1)
  const [numPages, setNumPages] = useState(null)

  const nextUrl = useRef(null)
  const prevUrl = useRef(null)

  const { myAxios } = useContext(UserContext)
  const location = useLocation()

  useEffect(() => {
    myAxios.get(process.env.REACT_APP_BACKEND_URL + `transactions/all/?page=${currPage}`).then(res => {
      setTransactionsDetails(prevDetails => res.data.results)
      nextUrl.current = res.data.next
      prevUrl.current = res.data.previous

      if (numPages === null) {
        setNumPages(res.data.results && Math.ceil(res.data.count / res.data.results.length))
      }
    }).catch(err => {
      console.log(err)
    })
  }, [location.key, currPage])

  return transactionsDetails
    ? (

      <div className="overflow-x-auto relative">
        <table className=" mx-auto mt-10 w-3/4 text-sm text-center text-gray-500">
          <thead className="text-md text-gray-700 uppercase bg-blue-50">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {transactionsDetails.map((transactionDetail, index) => {
              const valUnspent = transactionDetail.outputs.reduce((a, b) => a + b.value, 0)
              const valSpent = transactionDetail.used_outputs.reduce((a, b) => a + b.value, 0)

              return <TransactionOverview key = {transactionDetail.hash} hash={transactionDetail.hash} value={valUnspent + valSpent}/>
            })}
          </tbody>
        </table>

        <PaginationComponent currPage={currPage} numPages={numPages} next={nextUrl.current} prev={prevUrl.current} pageChanger={setCurrPage}/>
      </div>

      )
    : <div>Loading ...</div>
}
