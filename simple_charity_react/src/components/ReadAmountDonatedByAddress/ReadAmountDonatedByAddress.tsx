// ReadAmountDonatedByAddress.tsx
import charityABI from "../../chain-info/contracts/Charity.json"
import { useState } from 'react'
import { ReadAmountDonatedByAddressForm } from "./ReadAmountDonatedByAddressForm";
import { contractAddress } from '../ContractBalance'
import { useContractRead } from 'wagmi'
import { utils } from "ethers"
import { Button } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton';

export const ReadAmountDonatedByAddress = () => {
    const [address, setAddress] = useState()
    const [amount, setAmount] = useState()

    const { abi } = charityABI
    const [{ data, loading, error }, read] = useContractRead(
        {
            addressOrName: contractAddress,
            contractInterface: new utils.Interface(abi),
        },
        'addressToAmountDonated',
        {
            args: [address]
        },
    )

    const handleChange = () => {
        read()
        setAmount(data?.toNumber())

    }

    if (error) return (
        <div>
            <ReadAmountDonatedByAddressForm setAddress={setAddress} />
            <Button color='secondary' variant='contained' onClick={handleChange}>Check!</Button>
        </div>)

    if (loading) return (
        <div>
            <ReadAmountDonatedByAddressForm setAddress={setAddress} />
            <LoadingButton loading variant="contained"></LoadingButton>
            <p>Processing request...</p>
        </div>)

    return (
        <div>
            <ReadAmountDonatedByAddressForm setAddress={setAddress} />
            <Button color='secondary' variant='contained' onClick={handleChange}>Check!</Button>
            <p>{address} donated {amount} Wei.</p>
        </div>
    )
}