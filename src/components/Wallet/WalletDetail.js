import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { UserContext } from '../User/handleUser'
import WalletTransactions from './WalletTransactions'
import WalletOverview from './WalletOverview'
import Spinner from '../Spinner/Spinner'

export default function WalletDetail () {
  const [walletDetails, setWalletDetails] = useState(null)
  const { myAxios } = useContext(UserContext)
  const location = useLocation()

  useEffect(() => {
    myAxios.get(process.env.REACT_APP_BACKEND_URL + 'wallet/own/').then(res => {
      setWalletDetails(prevInfo => res.data)
    }).catch(err => console.log(err))
  }, [location.key])

  return walletDetails
    ? (
      <>
        <WalletOverview walletDetails={walletDetails} />

        <WalletTransactions />

      </>

      )
    : <Spinner />
}
