// DonateState.tsx
import { WithdrawForm } from "./WithdrawForm"
import { Withdraw } from "./Withdraw"
import { useState } from 'react'
import { useAccount } from 'wagmi'

export const WithdrawState = () => {

    const ownerAddress = process.env.REACT_APP_OWNER_ADDRESS

    const [{ data: accountData }] = useAccount()
    const userAddress = accountData?.address

    const isOwner = ownerAddress == userAddress

    const [address, setAddress] = useState()

    if (isOwner) return (
        <div>
            <WithdrawForm setAddress={setAddress} />
            <Withdraw toAddress={(address)} />
        </div>
    )

    return (
        <h3 className='txt-funcs'>Log in as contract owner to unlock Withdraw feature</h3>
    )
}