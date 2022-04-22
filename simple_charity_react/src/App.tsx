// App.tsx
import { Header } from "./components/Header"
import { Container } from "@material-ui/core"
import { ContractBalance } from "./components/ContractBalance"
import { Provider } from 'wagmi'
import { Connectors } from "./components/Connectors"
import { UserBalance } from "./components/UserBalance"
import { Network } from "./components/Network"
import { _Provider } from './components/_Provider'
import { ReadContract } from './components/ReadContract'
import { DonateState } from "./components/Donate/DonateState"
import { WithdrawState } from "./components/Withdraw/WithdrawState"
import { ReadAmountDonatedByAddress } from "./components/ReadAmountDonatedByAddress/ReadAmountDonatedByAddress"

function App() {
  return (
    <Provider provider={_Provider} connectors={Connectors}>
      <Header />

      <Container maxWidth="md">
        <div> Simple Charity App</div>
        <ContractBalance />
        <UserBalance />
        <Network />
        <ReadContract />
        <DonateState />
        <WithdrawState />
        <ReadAmountDonatedByAddress />

      </Container>

    </Provider>
  );
}

export default App;
