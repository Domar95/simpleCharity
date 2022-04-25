// UserBalance.tsx
import { useAccount, useBalance } from 'wagmi'
import { useContractRead } from 'wagmi'
import { contractAddress } from './ContractBalance'
import charityABI from "../chain-info/contracts/Charity.json"
import { utils } from "ethers"

export const UserBalance = () => {
    const [{ data: accountData }] = useAccount()

    const userAddress = accountData?.address

    const [{ data, error, loading }] = useBalance({
        addressOrName: (userAddress),
    })

    if (loading) return <div>Fetching balance…</div>
    if (error) return <div>Error fetching balance </div>
    if (userAddress) return (
        <div>
            <p>You are logged with account: {userAddress}</p>
            <p>Your balance: {data?.formatted} {data?.symbol}</p>
        </div>
    )
    return (<div>Not logged in</div>)
}   