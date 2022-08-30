import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App'
import Blocks from './components/Blocks/BlocksInfo'
import Transactions from './components/Transactions/TransactionsInfo'
import TransactionDetail from './components/Transactions/TransactionDetail'
import BlockDetail from './components/Blocks/BlockDetail'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="blocks">
        <Route index element = {<Blocks />}/>
        <Route path=":height" element={<BlockDetail />} />
      </Route>
      <Route path="transactions">
        <Route index element = {<Transactions />}/>
        <Route path="hash/:txhash" element={<TransactionDetail />} />
      </Route>

    </Routes>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
