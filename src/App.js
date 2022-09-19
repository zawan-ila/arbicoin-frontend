import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Blocks from './components/Blocks/BlocksInfo'
import Transactions from './components/Transactions/TransactionsInfo'
import TransactionDetail from './components/Transactions/TransactionDetail'
import BlockDetail from './components/Blocks/BlockDetail'
import LandingPage from './components/Landing/LandingPage'
import Login from './components/User/Login'
import Navbar from './components/User/Navbar'
import UserProvider from './components/User/handleUser'
import Signup from './components/User/Signup'
import PrivateRoute from './components/User/PrivateRoute'
import PublicRoute from './components/User/PublicRoute'

import './App.css'

function App () {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>

          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />

          <Route path='*' element={
            <PrivateRoute>
              <Navbar />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="blocks">
                  <Route index element = {<Blocks />}/>
                  <Route path=":height" element={<BlockDetail />} />
                </Route>
                <Route path="transactions">
                  <Route index element = {<Transactions />}/>
                  <Route path="hash/:txhash" element={<TransactionDetail />} />
                </Route>
              </Routes>
            </PrivateRoute>
          } />

        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
