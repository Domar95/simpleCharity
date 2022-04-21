// ReadAmountDonatedByAddress.tsx
import charityABI from "../../chain-info/contracts/Charity.json"
import { contractAddress } from '../ContractBalance'
import { useContractRead } from 'wagmi'
import { utils } from "ethers"
import { useAccount } from 'wagmi'

export const ReadAmountDonatedByAddress = ({ userAddress }: any) => {

    const [{ data: accountData }] = useAccount()
    const loggedAddress = accountData?.address

    const { abi } = charityABI
    const [{ data }] = useContractRead(
        {
            addressOrName: contractAddress,
            contractInterface: new utils.Interface(abi),
        },
        'addressToAmountDonated',
        {
            args: [userAddress]
        },
    )

    const amountDonated: number = data?.toNumber()

    if (amountDonated)
        if (loggedAddress == userAddress) return (
            <p>You have donated {amountDonated} Wei.</p>
        )
        else return <p>{userAddress} has donated {amountDonated} Wei.</p>
    return <div></div>

}