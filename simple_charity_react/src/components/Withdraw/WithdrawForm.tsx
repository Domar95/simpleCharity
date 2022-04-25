// WithdrawForm.tsx
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

export const WithdrawForm = (props: any) => {

    return (
        <div>
            <h2 className='func_title'>Withdraw</h2>
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel >Address to withdraw the funds to</InputLabel>
                <OutlinedInput
                    onChange={event => props.setAddress(event.target.value)}
                    label="Address to withdraw the funds to"
                />
            </FormControl>
        </div>
    )
}