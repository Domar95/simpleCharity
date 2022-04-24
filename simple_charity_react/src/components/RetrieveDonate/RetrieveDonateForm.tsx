// RetrieveDonateForm.tsx
export const RetrieveDonateForm = (props: any) => {

    return (
        <div>
            <h2>Retrieve Donate Data</h2>
            <form>
                <label>Index of donate: </label>
                <input
                    placeholder='Index' onChange={event => props.setIndex(event.target.value)}
                    type='number'
                    min='0'
                    required />
                <p></p>
            </form>
        </div>
    )
}