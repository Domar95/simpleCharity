import { DAppProvider, ChainId } from "@usedapp/core"
import { Header } from "./components/Header"
import { Container } from "@material-ui/core"
import { Main } from "./components/Main"
import { Balance } from "./components/UserBalance"

function App() {
  return (
    <DAppProvider config={{ supportedChains: [ChainId.Ropsten] }}>
      <Header />

      <Container maxWidth="md">
        <div> Simple Charity App</div>
        <Main />
        <Balance />
      </Container>

    </DAppProvider>
  );
}

export default App;
