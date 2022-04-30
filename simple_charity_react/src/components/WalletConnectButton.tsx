// WalletConnectButton.tsx
import { useConnect, useAccount } from 'wagmi'
import { Button } from "@material-ui/core"
import { useEffect } from 'react'
import { chain, Chain } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'


export const WalletConnectButton = () => {
    const [{ data: connectData, error: connectError }, connect] = useConnect()
    const [{ data: accountData }, disconnect] = useAccount({
        fetchEns: true,
    })

    const isConnected = accountData !== undefined

    const my_connect = (connector: any) => {
        connect(connector)
        localStorage.setItem('isConnected', 'y')
    }

    const my_disconnect = () => {
        disconnect()
        localStorage.setItem('isConnected', 'n')
    }

    const defaultChains: Chain[] = [chain.ropsten]
    const chains = defaultChains

    useEffect(() => {
        const autoConnect = () => {
            if (localStorage.getItem('isConnected') === 'y') {
                my_connect(new InjectedConnector({ chains }))
            }
        }
        autoConnect()
    }, [])

    if (isConnected) {
        return (<div>
            <Button color='primary' variant='contained'
                onClick={my_disconnect}>
                Disconnect from {connectData?.connector?.name}
            </Button>
        </div>)
    }

    return (
        <div>
            {connectData.connectors.map((connector) => (
                <Button color='primary' variant='contained'
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => my_connect(connector)}
                >
                    {connector.name}
                    {!connector.ready && '(unsupported)'}
                </Button>
            ))}
            {connectError && <div>{connectError?.message ?? 'Failed to connect'}</div>}
        </div >


    )
}