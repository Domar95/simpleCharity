// ReadAmountDonatedByAddressState.tsx
import { ReadAmountDonatedByAddressForm } from "./ReadAmountDonatedByAddressForm";
import { useState } from 'react'
import { ReadAmountDonatedByAddress } from "./ReadAmountDonatedByAddress";


export const ReadAmountDonatedByAddressState = () => {
    const [address, setAddress] = useState()

    return (
        <div>
            <form>
                <ReadAmountDonatedByAddressForm setAddress={setAddress} />
            </form>
            <button onClick={() => ReadAmountDonatedByAddress(address)}>Check!</button>
        </div>
    )
}