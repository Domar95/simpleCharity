// Network.tsx
import { useNetwork } from 'wagmi'
import { Button } from "@material-ui/core"

export const Network = () => {
    const [{ data, error }, switchNetwork] = useNetwork()

    return (
        <>
            <div>
                {data.chain?.unsupported && '(unsupported)'}
            </div>

            {switchNetwork &&
                data.chains.map((x) =>
                    x.id === data.chain?.id ? null : (
                        <Button color='primary' variant='contained' key={x.id} onClick={() => switchNetwork(x.id)}>
                            Switch to {x.name}
                        </Button>
                    ),
                )}

            {error && <div>{error?.message}</div>}
        </>
    )
}