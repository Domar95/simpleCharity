// UserBalance.tsx
import { useAccount, useBalance } from 'wagmi'

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