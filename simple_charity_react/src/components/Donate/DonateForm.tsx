// DonateForm.tsx
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

export const DonateForm = (props: any) => {

    return (
        <div>
            <h2 className='func_title'>Donate</h2>
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel >Amount to donate</InputLabel>
                <OutlinedInput
                    onChange={event => props.setAmount(event.target.value)}
                    startAdornment={<InputAdornment position="start">Wei</InputAdornment>}
                    label="Amount to donate"
                    type="number"
                />

            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel >Greetings</InputLabel>
                <OutlinedInput
                    onChange={event => props.setGreetings(event.target.value)}
                    label="Greetings"
                />
            </FormControl>
        </div>
    )
}