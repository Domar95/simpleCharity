// _Provider.tsx
import { providers } from 'ethers'

const infuraId = process.env.REACT_APP_INFURA_ID

export const _Provider = () =>
  new providers.InfuraProvider(3, infuraId)
