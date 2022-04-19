// Donate.tsx
import { useContractWrite } from 'wagmi'
import { contractAddress } from '../ContractBalance'
import charityABI from "../../chain-info/contracts/Charity.json"
import { Button } from "@material-ui/core"

export const Donate = ({ userAmount, userGreetings }: any) => {
    const { abi } = charityABI
    const [, write] = useContractWrite(
        {
            addressOrName: contractAddress,
            contractInterface: abi,
        },
        'donate',
        {
            args: [userGreetings],
            overrides: { value: userAmount }
        },
    )


    return (
        <Button color='secondary' variant='contained' onClick={() => write()}>Donate</Button>

    )
}