import { apiClient, cryptography, transactions } from 'klayr-sdk';

const RPC_ENDPOINT = 'ws://3.121.0.0:7887/rpc-ws';
const passphrase =
    'virtual gather bean twelve zone muffin glass defy certain before catch verify enjoy air improve quick toast cry major siren must sunny trouble position';

let clientCache: apiClient.APIClient;
const getClient = async () => {
    if (!clientCache) {
        clientCache = await apiClient.createWSClient(RPC_ENDPOINT);
    }
    return clientCache;
};

getClient().then(async apiClient => {
    const privateKey = await cryptography.ed.getPrivateKeyFromPhraseAndPath(
        passphrase,
        "m/44'/134'/0'",
    );
    console.log(
        await apiClient.invoke('identity_getAccount', {
            address: 'kly4cbm9neguv2c4yx7fqgjp9tadooph4z38wktsy',
        }),
    );
    const tx = await apiClient.transaction.create(
        {
            module: 'identity',
            command: 'setFeature',
            fee: transactions.convertklyToBeddows('1'),
            params: {
                features: [
                    {
                        label: 'test',
                        value: 'test',
                    },
                ],
            },
        },
        privateKey.toString('hex'),
    );
    console.log('Signed transaction object: ', tx);

    const result = await apiClient.transaction.send(tx);
    console.log('Transaction result: ', result);

    process.exit(0);
});
