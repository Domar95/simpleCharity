// AccountInfo.tsx
import { ContractBalance } from "./ContractBalance"
import { UserBalance } from "./UserBalance"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const AccountInfo = () => {
    return <div>
        <Box sx={{ p: 1, m: 2 }}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                borderRadius="12px">
                <Grid>
                    <Grid borderRadius="12px" padding={2}>
                        <h2 className='txt-info'>Contract Info</h2>
                        <ContractBalance />
                    </Grid>
                    <Grid borderRadius="12px" padding={2}>
                        <h2 className='txt-info'>User info</h2>
                        <UserBalance />
                    </Grid>
                </Grid>
            </Grid>
        </Box>

    </div>
}