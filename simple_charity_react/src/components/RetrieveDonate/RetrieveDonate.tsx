// RetrieveDonate.tsx
import charityABI from "../../chain-info/contracts/Charity.json"
import { useState } from 'react'
import { contractAddress } from '../ContractBalance'
import { useContractRead } from 'wagmi'
import { utils } from "ethers"
import { Button } from "@material-ui/core"
import { RetrieveDonateForm } from "./RetrieveDonateForm"
import LoadingButton from '@mui/lab/LoadingButton'
import TextField from '@mui/material/TextField';

export const RetrieveDonate = () => {

    const [index, setIndex] = useState()

    const [address, setAddress] = useState()
    const [amount, setAmount] = useState()
    const [greetings, setGreetings] = useState()

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

    const handleChange = () => {
        read()
        setAddress(data?.[0])
        setAmount(data?.[1].toNumber())
        setGreetings(data?.[2])
    }

    if (loading) return (
        <div>
            <RetrieveDonateForm setIndex={setIndex} />
            <li>Address: {address}</li>
            <p></p>
            <li>Amount: {amount}</li>
            <p></p>
            <li>Greetings: {greetings}</li>
            <p></p>
            <LoadingButton loading variant="contained"></LoadingButton>
            <p>Processing request...</p>
        </div>)

    return (
        <div>
            <RetrieveDonateForm setIndex={setIndex} />
            <li>Address: {address}</li>
            <p></p>
            <li>Amount: {amount}</li>
            <p></p>
            <li>Greetings: {greetings}</li>
            <p></p>
            <Button className='btn-grad' color='secondary' variant='contained' onClick={handleChange}>Check!</Button>
        </div>)
}
