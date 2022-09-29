import React from 'react'
import PropTypes from 'prop-types'

export default function WalletOverview ({ walletDetails }) {
  return (
    <div className='grid my-4 grid-cols-3 mx-auto mt-10 w-full text-lg text-center text-gray-500'>

      <div className='col-span-3 text-gray-700 uppercase bg-blue-50 text-center'>Details</div>

      <div>Address</div>
      <div className='col-span-2 px-3 break-all'>{walletDetails.address}</div>

      <div>Coins Received</div>
      <div className='col-span-2'>{walletDetails.received}</div>

      <div >Coins Sent</div>
      <div className='col-span-2'>{walletDetails.sent}</div>

      <div>Balance</div>
      <div className='col-span-2'>{walletDetails.balance}</div>

    </div>

  )
}

WalletOverview.propTypes = {
  walletDetails: PropTypes.object.isRequired

}
