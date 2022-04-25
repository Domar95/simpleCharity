// RetrieveDonateForm.tsx
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

export const RetrieveDonateForm = (props: any) => {

    return (
        <div>
            <h2 className='func_title'>Retrieve Donate Data</h2>
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel >Index of a donate to read the data</InputLabel>
                <OutlinedInput
                    onChange={event => props.setIndex(event.target.value)}
                    label="Index of a donate to read the data"
                    type="number"
                />
            </FormControl>
        </div >
    )
}