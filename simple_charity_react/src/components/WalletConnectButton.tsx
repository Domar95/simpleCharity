// WalletConnectButton.tsx
import { useConnect, useAccount } from 'wagmi'
import { Button } from "@material-ui/core"

export const WalletConnectButton = () => {
    const [{ data: connectData, error: connectError }, connect] = useConnect()
    const [{ data: accountData }, disconnect] = useAccount({
        fetchEns: true,
    })

    const isConnected = accountData !== undefined

    if (isConnected) {
        return (<div>
            <Button color='primary' variant='contained'
                onClick={disconnect}>
                Disconnect from {connectData?.connector?.name}
            </Button>
            <p>{accountData?.address}</p>
        </div>)
    }

    return (
        <div>
            {connectData.connectors.map((connector) => (
                <Button color='primary' variant='contained'
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect(connector)}
                >
                    {connector.name}
                    {!connector.ready && ' (unsupported)'}
                </Button>
            ))}
            {connectError && <div>{connectError?.message ?? 'Failed to connect'}</div>}
        </div >


    )
}