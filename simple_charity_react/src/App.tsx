// App.tsx
import { Header } from "./components/Header"
import { Container } from "@material-ui/core"
import { Provider } from 'wagmi'
import { Connectors } from "./components/Connectors"
import { NetworkSwitch } from "./components/NetworkSwitch"
import { _Provider } from './components/_Provider'
import { DonateState } from "./components/Donate/DonateState"
import { WithdrawState } from "./components/Withdraw/WithdrawState"
import { ReadAmountDonatedByAddress } from "./components/ReadAmountDonatedByAddress/ReadAmountDonatedByAddress"
import { RetrieveDonate } from "./components/RetrieveDonate/RetrieveDonate"
import "./components/myStyles.css"
import { Functionalities } from "./components/Functionalities"
import { Title } from "./components/Title"
import { AccountInfo } from "./components/AccountInfo"

function App() {
  return (
    <Provider provider={_Provider} connectors={Connectors}>
      <Header />

      <Container>
        <Title />
        <AccountInfo />
        <NetworkSwitch />
        <Functionalities />
      </Container>

    </Provider>
  );
}

export default App;
