// RetrieveDonate.tsx
import charityABI from "../../chain-info/contracts/Charity.json"
import { useEffect, useState } from 'react'
import { contractAddress } from '../ContractBalance'
import { useContractRead } from 'wagmi'
import { utils } from "ethers"
import { Button } from "@material-ui/core"
import { RetrieveDonateForm } from "./RetrieveDonateForm"
import LoadingButton from '@mui/lab/LoadingButton'
import TextField from '@mui/material/TextField';

export const RetrieveDonate = () => {

    const [index, setIndex] = useState()

    const { abi } = charityABI
    const [{ data, loading }, read] = useContractRead(
        {
            addressOrName: contractAddress,
            contractInterface: new utils.Interface(abi),
        },
        'donates',
        {
            args: [index],
        }
    )

    const Refresh = () => {
        read()
    }

    useEffect(() => {
        read()
    }, [index])

    if (loading) return (
        <div>
            <RetrieveDonateForm setIndex={setIndex} />
            <li>Address: {data?.[0]}</li>
            <p></p>
            <li>Amount: {data?.[1].toNumber()}</li>
            <p></p>
            <li>Greetings: {data?.[2]}</li>
            <p></p>
            <LoadingButton loading variant="contained"></LoadingButton>
            <p>Processing request...</p>
        </div>)

    return (
        <div>
            <RetrieveDonateForm setIndex={setIndex} />
            <li>Address: {data?.[0]}</li>
            <p></p>
            <li>Amount: {data?.[1].toNumber()}</li>
            <p></p>
            <li>Greetings: {data?.[2]}</li>
            <p></p>
            <Button className='btn-grad' color='secondary' variant='contained' onClick={Refresh}>Refresh!</Button>
        </div>)
}
