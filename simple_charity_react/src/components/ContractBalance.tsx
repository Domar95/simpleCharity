// ContractBalance.tsx
import { useBalance } from 'wagmi'
import networkMapping from "../chain-info/deployments/map.json"

export const contractAddress = networkMapping["3"]["Charity"][0]

export const ContractBalance = () => {


    const [{ data, error, loading }] = useBalance({
        addressOrName: (contractAddress),
    })

    if (loading) return <div>Fetching balance…</div>
    if (error) return <div>Error fetching balance </div>
    if (contractAddress) return (
        <div>
            <p>Contract address: {contractAddress}</p>
            <p>Contract balance: {data?.formatted} {data?.symbol}</p>
        </div>)
    return (
        <div>
            <p>Contract not found.</p>
        </div>)
}