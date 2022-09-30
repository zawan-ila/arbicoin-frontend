import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'

import { UserContext } from '../User/handleUser'
import WalletOverview from './WalletOverview'
import Spinner from '../Spinner/Spinner'

export default function WalletForeign () {
  const [walletDetails, setWalletDetails] = useState(null)
  const { myAxios } = useContext(UserContext)

  const { address } = useParams()

  useEffect(() => {
    myAxios.get(process.env.REACT_APP_BACKEND_URL + `wallet/${address}/`).then(res => {
      setWalletDetails(res.data)
      setWalletDetails(prev => { return { ...prev, address } })
    }).catch(err => console.log(err))
  }, [])

  return walletDetails
    ? (
      <>
        <WalletOverview walletDetails={walletDetails} />
      </>

      )
    : <Spinner />
}
