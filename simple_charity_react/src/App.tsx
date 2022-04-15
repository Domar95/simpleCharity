// App.tsx
import { Header } from "./components/Header"
import { Container } from "@material-ui/core"
import { Main } from "./components/Main"
import { Provider } from 'wagmi'
import { Connectors } from "./components/Connectors"
import { UserBalance } from "./components/UserBalance"
import { Network } from "./components/Network"
import { _Provider } from './components/_Provider'

function App() {
  return (
    <Provider provider={_Provider} connectors={Connectors}>
      <Header />

      <Container maxWidth="md">
        <div> Simple Charity App</div>
        <Main />
        <UserBalance />
        <Network />

      </Container>

    </Provider>
  );
}

export default App;
