```
     OOOOOOOOO     RRRRRRRRRRRRRRRRR   MMMMMMMM               MMMMMMMMIIIIIIIIII
   OO:::::::::OO   R::::::::::::::::R  M:::::::M             M:::::::MI::::::::I
 OO:::::::::::::OO R::::::RRRRRR:::::R M::::::::M           M::::::::MI::::::::I
O:::::::OOO:::::::ORR:::::R     R:::::RM:::::::::M         M:::::::::MII::::::II
O::::::O   O::::::O  R::::R     R:::::RM::::::::::M       M::::::::::M  I::::I
O:::::O     O:::::O  R::::R     R:::::RM:::::::::::M     M:::::::::::M  I::::I
O:::::O     O:::::O  R::::RRRRRR:::::R M:::::::M::::M   M::::M:::::::M  I::::I
O:::::O     O:::::O  R:::::::::::::RR  M::::::M M::::M M::::M M::::::M  I::::I
O:::::O     O:::::O  R::::RRRRRR:::::R M::::::M  M::::M::::M  M::::::M  I::::I
O:::::O     O:::::O  R::::R     R:::::RM::::::M   M:::::::M   M::::::M  I::::I
O:::::O     O:::::O  R::::R     R:::::RM::::::M    M:::::M    M::::::M  I::::I
O::::::O   O::::::O  R::::R     R:::::RM::::::M     MMMMM     M::::::M  I::::I
O:::::::OOO:::::::ORR:::::R     R:::::RM::::::M               M::::::MII::::::II
 OO:::::::::::::OO R::::::R     R:::::RM::::::M               M::::::MI::::::::I
   OO:::::::::OO   R::::::R     R:::::RM::::::M               M::::::MI::::::::I
     OOOOOOOOO     RRRRRRRR     RRRRRRRMMMMMMMM               MMMMMMMMIIIIIIIIII

```
# Ormi Lending Protocol
Ormi is made possible because it is built on top of DeFi giant Aave. Ormi's lending protocol began as a fork of Aave's protocol-v2. Special thanks to the Aave team to its commitment to technical excellence, open source, and decentralization to make Ormi a reality.

# Ormi protocol interface

An open source interface for the decentralized credit protocol Ormi. 

Enabling users to:

- Manage and monitor their positions on the Ormi Protocol, and the overall status of it
- Manage and monitor their positions on the Ormi Safety module
- Participate in the Ormi Governance

## How to use

Install it and run:

```sh
yarn
yarn dev
```

To use local fork mode, run the following commands in console:
```
localStorage.setItem('forkEnabled', 'true');
localStorage.setItem('forkBaseChainId', 1); // the networkId you are forking
localStorage.setItem('forkNetworkId', '3030'); // the networkId on the fork
localStorage.setItem('forkRPCUrl', 'http://127.0.0.1:8545');
```

## Contribution

For instructions on local development, deployment, configurations & feature proposals, see [Contributing](./CONTRIBUTING.md)

## IPFS deployment

Each commit gets deployed to IPFS automatically

There's a github action commenting the appropriate IPFS hash embedded in the Cloudflare IPFS gateway after each commit

For ease of use:

- the DNS of [https://staging.aave.com](https://staging.aave.com) will always point to the latest main IPFS hash with all networks enabled
- the DNS of [https://app.aave.com](https://app.aave.com) will always point to the latest main IPFS hash with disabled test networks

### Links known to work at some point:

- [https://app-aave-com.ipns.cf-ipfs.com/#/](https://app-aave-com.ipns.cf-ipfs.com/#/)
- [https://app-aave-com.ipns.dweb.link/#/](https://app-aave-com.ipns.dweb.link/#/)

### Troubleshooting

Issue: I cannot connect to `app.aave.com`

The aave-ui is hosted on IPFS in a decentralized manner. `app.aave.com` just holds a CNAME record to the Cloudflare IPFS gateway. You can use [any](https://ipfs.github.io/public-gateway-checker/) public or private IPFS gateway supporting origin isolation to access aave-ui if for some reason the Cloudflare gateway doesn't work for you

Just go to `<your favorite public ipfs gateway>/ipns/app.aave.com`

⚠️ Make sure the gateway supports origin isolation to avoid possible security issues: you should be redirected to URL that looks like `https://app-aave-com.<your gateway>`

## License

[BSD-3-Clause](./LICENSE.md)

## Credits

To all the Ethereum community
