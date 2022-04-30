// ReadAmountDonatedByAddress.tsx
import charityABI from "../../chain-info/contracts/Charity.json"
import { useEffect, useState } from 'react'
import { ReadAmountDonatedByAddressForm } from "./ReadAmountDonatedByAddressForm";
import { contractAddress } from '../ContractBalance'
import { useContractRead } from 'wagmi'
import { utils } from "ethers"
import { Button } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton';

export const ReadAmountDonatedByAddress = () => {
    const [address, setAddress] = useState()

    const { abi } = charityABI
    const [{ data, loading }, read] = useContractRead(
        {
            addressOrName: contractAddress,
            contractInterface: new utils.Interface(abi),
        },
        'addressToAmountDonated',
        {
            args: [address]
        },
    )

    const Refresh = () => {
        read()
    }

    useEffect(() => {
        read()
    }, [address])


    if (loading) return (
        <div>
            <ReadAmountDonatedByAddressForm setAddress={setAddress} />
            <LoadingButton loading variant="contained"></LoadingButton>
            <p>Processing request...</p>
        </div>)

    return (
        <div>
            <ReadAmountDonatedByAddressForm setAddress={setAddress} />

            <p></p>
            <li>Address: {address}</li>
            <p></p>
            <li>Amount donated (Wei): {data?.toString()}</li>
            <p></p>
            <Button className='btn-grad' color='secondary' variant='contained' onClick={Refresh}>Refresh!</Button>
        </div>
    )
}