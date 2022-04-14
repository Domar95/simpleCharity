import { Header } from "./components/Header"
import { Container } from "@material-ui/core"
import { Main } from "./components/Main"
import { Provider } from 'wagmi'
import { Connectors } from "./components/Connectors"
import { UserBalance } from "./components/UserBalance"
import { Network } from "./components/Network"

function App() {
  return (
    <Provider connectors={Connectors}>
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
