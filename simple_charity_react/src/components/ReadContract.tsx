import charityABI from "../chain-info/contracts/Charity.json"
import { contractAddress } from './ContractBalance'
import { useContractRead } from 'wagmi'
import { utils } from "ethers"

export const ReadContract = () => {
    const { abi } = charityABI
    const [{ data }] = useContractRead(
        {
            addressOrName: contractAddress,
            contractInterface: new utils.Interface(abi),
        },
        'getBalance',
    )

    console.log(data)

    return (
        <div>
            <p>data type: {typeof (data)}</p>
        </div>)
}

