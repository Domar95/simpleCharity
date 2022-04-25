// Functionalities.tsx
import { DonateState } from "./Donate/DonateState"
import { WithdrawState } from "./Withdraw/WithdrawState"
import { ReadAmountDonatedByAddress } from "./ReadAmountDonatedByAddress/ReadAmountDonatedByAddress"
import { RetrieveDonate } from "./RetrieveDonate/RetrieveDonate"
import "./myStyles.css"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const Functionalities = () => {

    return (
        <div><Box >
            <h1 className='txt-funcs' text-align='center'> Interact with a contract </h1>
            <Box className='func_box'
                border={4}
                borderLeft={4}
                borderRight={4}
                borderColor="black"
                borderRadius="12px">

                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch">
                    <Grid container item xs={12} spacing={8} padding={5}>
                        <Grid item xs={6}>
                            <DonateState />
                        </Grid>
                        <Grid item xs={6}>
                            <WithdrawState />
                        </Grid>
                        <Grid item xs={6}>
                            <RetrieveDonate />
                        </Grid>
                        <Grid item xs={6}>
                            <ReadAmountDonatedByAddress />
                        </Grid>
                    </Grid >
                </Grid>
            </Box>
        </Box>
        </div>
    )
}