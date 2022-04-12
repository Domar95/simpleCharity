import networkMapping from "../chain-info/deployments/map.json"


export const Main = () => {

    const contractAddress = networkMapping["3"]["Charity"][0]

    return (<div>Contract address: {contractAddress}</div>)
}
