// Withdraw.tsx
import { useContractWrite } from 'wagmi'
import { contractAddress } from '../ContractBalance'
import charityABI from "../../chain-info/contracts/Charity.json"
import { Button } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'

export const Withdraw = ({ toAddress }: any) => {
    const { abi } = charityABI
    const [{ loading }, write] = useContractWrite(
        {
            addressOrName: contractAddress,
            contractInterface: abi,
        },
        'withdrawTo',
        {
            args: [toAddress]
        },
    )

    if (loading) return (
        <div>
            <LoadingButton loading variant="contained"></LoadingButton>
            <p>Processing request...</p>
        </div>)

    return (
        <div>
            <Button color='secondary' variant='contained' onClick={() => write()}>Withdraw funds</Button>
        </div>


    )
}