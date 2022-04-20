// Withdraw.tsx
import { useContractWrite } from 'wagmi'
import { contractAddress } from '../ContractBalance'
import charityABI from "../../chain-info/contracts/Charity.json"
import { Button } from "@material-ui/core"

export const Withdraw = ({ toAddress }: any) => {
    const { abi } = charityABI
    const [, write] = useContractWrite(
        {
            addressOrName: contractAddress,
            contractInterface: abi,
        },
        'withdrawTo',
        {
            args: [toAddress]
        },
    )


    return (
        <Button color='secondary' variant='contained' onClick={() => write()}>Withdraw funds</Button>

    )
}