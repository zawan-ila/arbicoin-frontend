import React, { useContext } from 'react'
import { UserContext } from './handleUser'
import { useNavigate, Link } from 'react-router-dom'

import logo from '../../assets/logo.png'

export default function Navbar () {
  const navigate = useNavigate()

  const { user, handleLogout } = useContext(UserContext)

  return (

    <nav className="bg-green-200 border-blue-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto px-4 md:px-6 py-2.5">
        <a href="/" className="flex items-center">
          <img src={logo} className=" rounded-full mr-3 h-6 sm:h-9" alt="Arbicoin Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Arbicoin</span>
        </a>

        <div className="justify-between items-center w-full md:flex md:w-auto ">
          <ul className="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <Link to="/blocks" className="block py-2 pr-4 pl-3 text-yellow-700 hover:text-yellow-900 underline rounded md:p-0 text-lg" >Blocks</Link>
            </li>
            <li>
              <Link to="/transactions" className="block py-2 pr-4 pl-3 text-yellow-700 hover:text-yellow-900 underline rounded md:p-0 text-lg">Transactions</Link>
            </li>

          </ul>
        </div>

        <div className="flex items-center">
          <button onClick={handleLogout} className=" p-3 text-sm font-medium text-white bg-blue-400 hover:bg-blue-500 rounded">Logout</button>
        </div>

      </div>
    </nav>
  )
}
