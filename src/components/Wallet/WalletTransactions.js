import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { UserContext } from '../User/handleUser'
import TxSummary from './TxSummary'
import Spinner from '../Spinner/Spinner'

export default function WalletTransactions () {
  const [walletTransactionsDetails, setWalletTransactionsDetails] = useState(null)
  const { myAxios } = useContext(UserContext)
  const location = useLocation()

  useEffect(() => {
    myAxios.get(process.env.REACT_APP_BACKEND_URL + 'wallet/transactions/').then(res => {
      setWalletTransactionsDetails(res.data)
    }).catch(err => console.log(err))
  }, [location.key])

  return walletTransactionsDetails
    ? (
        walletTransactionsDetails.map(tx => <TxSummary key={tx.hash} timestamp = {tx.timestamp} hash={tx.hash} outputs={tx.outputs} usedOutputs={tx.used_outputs} inputs={tx.inputs}/>)
      )
    : <Spinner />
}
