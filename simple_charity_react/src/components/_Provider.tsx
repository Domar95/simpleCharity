// _Provider.tsx
import { providers } from 'ethers'

const infuraId = process.env.REACT_APP_INFURA_ID

export const _Provider = ({ chainId }: { chainId?: number }) =>
  new providers.InfuraProvider(chainId, infuraId)
