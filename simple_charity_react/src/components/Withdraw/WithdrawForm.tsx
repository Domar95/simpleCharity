// WithdrawForm.tsx
export const WithdrawForm = (props: any) => {

    return (
        <div>
            <h2>Withdraw</h2>
            <form>
                <label>Withdraw to address: </label>
                <input
                    placeholder='Address' onChange={event => props.setAddress(event.target.value)}
                    type='text'
                    required />
            </form>
        </div>
    )
}