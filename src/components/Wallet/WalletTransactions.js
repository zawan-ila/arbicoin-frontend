import React, { useEffect, useState, useContext } from 'react'

import { UserContext } from '../User/handleUser'
import TxSummary from './TxSummary'

export default function WalletTransactions () {
  const [walletTransactionsDetails, setWalletTransactionsDetails] = useState(null)
  const { myAxios } = useContext(UserContext)

  useEffect(() => {
    myAxios.get(process.env.REACT_APP_BACKEND_URL + 'wallet/transactions/').then(res => {
      setWalletTransactionsDetails(res.data)
    }).catch(err => console.log(err))
  }, [])

  return walletTransactionsDetails
    ? (
        walletTransactionsDetails.map(tx => <TxSummary key={tx.hash} timestamp = {tx.timestamp} hash={tx.hash} outputs={tx.outputs} usedOutputs={tx.used_outputs} inputs={tx.inputs}/>)
      )
    : <div>Loading ...</div>
}
