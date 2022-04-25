// ReadAmountDonatedByAddressForm.tsx
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

export const ReadAmountDonatedByAddressForm = (props: any) => {


    return (
        <div>
            <h2 className='func_title'>View donated amount</h2>
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel >Address to view amount donated</InputLabel>
                <OutlinedInput
                    onChange={event => props.setAddress(event.target.value)}
                    label="Address to view amount donated" />
            </FormControl>
        </div>
    )
}
