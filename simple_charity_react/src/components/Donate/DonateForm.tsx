// DonateForm.tsx
export const DonateForm = (props: any) => {

    return (
        <div>
            <h2>Donate</h2>
            <form>
                <label>Donate: </label>
                <input
                    placeholder='Amount' onChange={event => props.setAmount(event.target.value)}
                    type='number'
                    min='1'
                    required />
                <label> Greetings: </label>
                <input
                    placeholder='Greetings' onChange={event => props.setGreetings(event.target.value)}
                    type='text' />
            </form>
        </div>
    )
}