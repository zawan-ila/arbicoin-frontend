import React, { useEffect, useState, useContext } from 'react'

import { UserContext } from '../User/handleUser'
import Card from './Card'
import WalletTransactions from './WalletTransactions'
import WalletOverview from './WalletOverview'

export default function WalletDetail () {
  const [walletDetails, setWalletDetails] = useState(null)
  const { myAxios } = useContext(UserContext)

  useEffect(() => {
    myAxios.get(process.env.REACT_APP_BACKEND_URL + 'wallet/own/').then(res => {
      setWalletDetails(prevInfo => res.data)
    }).catch(err => console.log(err))
  }, [])

  return walletDetails
    ? (
      <>
        <WalletOverview walletDetails={walletDetails} />

        <WalletTransactions />

      </>

      )
    : <div>Loading...</div>
}