// ReadAmountDonatedByAddressForm.tsx
export const ReadAmountDonatedByAddressForm = (props: any) => {

    return (
        <div>
            <h2>View donated amount</h2>
            <form>
                <label>Address to check: </label>
                <input
                    placeholder='Address' onChange={event => props.setAddress(event.target.value)}
                    type='text'
                    required />
                <p></p>
            </form>
        </div>
    )
}