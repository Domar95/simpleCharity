import { formatEther } from '@ethersproject/units'
import { useEthers, useEtherBalance } from "@usedapp/core"

export const Balance = () => {
    const { account, chainId } = useEthers()
    const etherBalance = useEtherBalance(account, { chainId })

    return <div> {account} / {etherBalance && etherBalance ? formatEther(etherBalance) : "no Balance found"} </div>
}