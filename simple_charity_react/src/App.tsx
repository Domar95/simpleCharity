import React from 'react';
import { DAppProvider, ChainId } from "@usedapp/core"

function App() {
  return (
    <DAppProvider config={{ supportedChains: [ChainId.Ropsten, ChainId.Rinkeby] }}>
      <div> Simple Charity App</div>
    </DAppProvider>
  );
}

export default App;
