// UserBalance.tsx
import { useBalance } from 'wagmi'

export const UserBalance = () => {
    const [{ data, error, loading }] = useBalance({
        addressOrName: '0xE73CF47783d04E5f92C6706EeE304742E0FF7D31',
    })


    if (loading) return <div>Fetching balance…</div>
    if (error) return <div>Error fetching balance </div>
    return (
        <div>
            {data?.formatted} {data?.symbol}
        </div>
    )
}