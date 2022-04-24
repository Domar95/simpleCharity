// DonateState.tsx
import { DonateForm } from "./DonateForm";
import { useState } from 'react'
import { Donate } from "./Donate";


export const DonateState = () => {
    const [amount, setAmount] = useState()
    const [greetings, setGreetings] = useState()

    return (
        <div>
            <DonateForm setAmount={setAmount} setGreetings={setGreetings} />
            <Donate userAmount={Number(amount)} userGreetings={(greetings)} />

        </div>
    )
}