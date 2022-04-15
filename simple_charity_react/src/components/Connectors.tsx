// Connectors.tsx
import { chain, Chain } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
const infuraId = process.env.REACT_APP_INFURA_ID

// Chains for connectors to support
const defaultChains: Chain[] = [chain.ropsten]
const chains = defaultChains


// Set up connectors
export const Connectors = () => {
    return [
        new InjectedConnector({
            chains,
            options: { shimDisconnect: true },
        }),
    ]
}