import React, { useContext, useState } from 'react'
import { UserContext } from '../User/handleUser'
import { useNavigate } from 'react-router-dom'

export default function TransactionPostForm () {
  const [formError, setFormError] = useState(null)

  const { myAxios } = useContext(UserContext)

  function handlePost (e) {
    e.preventDefault()

    const addr = e.target.address.value
    const value = e.target.amount.value

    myAxios.post(process.env.REACT_APP_BACKEND_URL + 'wallet/post/', {
      address: addr,
      value
    }).then(res => {
      setFormError(res.data.error ? res.data.error : res.data.success)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <h4 className='mt-8 px-3 w-full mx-auto my-4 text-lg text-gray-700 uppercase bg-blue-50 text-center'>Post a Transaction?</h4>
      <div className='mt-10 w-5/6 mx-auto'>
        <span className={(formError ? '' : 'hidden ') + 'flex mb-1 items-center font-medium tracking-wide text-red-500 text-xs mt-0 ml-1'}>
          {formError}
        </span>
        <form onSubmit={handlePost}>
          <input
                        required
                        type="text"
                        className="form-input"
                        name="address"
                        placeholder="Receiver Address" />

          <input
                        required
                        type="text"
                        className="form-input"
                        name="amount"
                        placeholder="Amount" />

          <button
                        type="submit"
                        className="form-submit w-full bg-purple-500 hover:bg-purple-400"
                    >Confirm Transaction</button>
        </form>
      </div>
    </>

  )
}
