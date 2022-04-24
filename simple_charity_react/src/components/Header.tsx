// Header.tsx
import { makeStyles } from "@material-ui/core"
import Typography from '@mui/material/Typography';
import { WalletConnectButton } from './WalletConnectButton'


const useStyles = makeStyles((my_theme) => ({
    container: {
        padding: my_theme.spacing(3),
        display: "flex",
        justifyContent: "flex-end",
        gap: my_theme.spacing(1),
    }
}))



export const Header = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <WalletConnectButton />
        </div >
    )
}