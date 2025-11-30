<img width="1562" height="723" alt="image" src="https://github.com/user-attachments/assets/99ea36d5-a6f0-48ae-961b-a50a92a33825" />

# KryptoTransfer

A Web3 decentralized application (dApp) for sending Ethereum across the world. Built with React, Solidity, and Hardhat.

![KryptoTransfer](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Solidity](https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=solidity&logoColor=white)

## Features

- 🔗 Connect MetaMask wallet
- 💸 Send Ethereum to any address
- 📝 Add messages and keywords to transactions
- 🎬 GIF integration with transactions via Giphy API
- 📜 View transaction history on the blockchain
- 🔒 Secure smart contract on Ethereum/Sepolia network

## Tech Stack

- **Frontend:** React, Vite, TailwindCSS
- **Smart Contract:** Solidity, Hardhat
- **Blockchain:** Ethereum (Sepolia Testnet / Mainnet)
- **Wallet:** MetaMask
- **APIs:** Alchemy, Giphy

## Project Structure

```
CryptoTransfer/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── context/        # Transaction context
│   │   ├── hooks/          # Custom hooks
│   │   └── utils/          # Utilities & constants
│   └── .env                # Client environment variables
│
└── smart_contract/         # Solidity backend
    ├── contracts/          # Smart contracts
    ├── scripts/            # Deployment scripts
    └── .env                # Contract environment variables
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [MetaMask](https://metamask.io/) browser extension
- [Alchemy](https://www.alchemy.com/) account (for RPC URL)
- [Giphy](https://developers.giphy.com/) API key

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/CryptoTransfer.git
cd CryptoTransfer
```

### 2. Install dependencies

```bash
# Install smart contract dependencies
cd smart_contract
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Set up environment variables

**Smart Contract** (`smart_contract/.env`):

```
ALCHEMY_API_KEY=your_alchemy_api_key
PRIVATE_KEY=your_wallet_private_key
```

**Client** (`client/.env`):

```
VITE_GIPHY_API=your_giphy_api_key
VITE_CONTRACT_ADDRESS=your_deployed_contract_address
```

### 4. Deploy the smart contract

```bash
cd smart_contract

# Compile the contract
npx hardhat compile

# Deploy to Sepolia testnet
npx hardhat run scripts/deploy.js --network sepolia

# Or deploy to Mainnet (requires real ETH)
npx hardhat run scripts/deploy.js --network mainnet
```

Copy the deployed contract address and add it to `client/.env`.

### 5. Run the application

```bash
cd client
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

1. **Connect Wallet** - Click "Connect Wallet" and approve MetaMask connection
2. **Enter Details** - Fill in recipient address, amount, keyword, and message
3. **Send Transaction** - Click "Send Now" and confirm in MetaMask
4. **View History** - Scroll down to see all transactions on the blockchain

## Smart Contract

The `Transactions.sol` contract includes:

- `addToBlockchain()` - Records a transaction on the blockchain
- `getAllTransactions()` - Returns all transactions
- `getTransactionCount()` - Returns total transaction count

## Networks

| Network | Chain ID | RPC URL                                         |
| ------- | -------- | ----------------------------------------------- |
| Sepolia | 11155111 | `https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY` |
| Mainnet | 1        | `https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY` |

## Getting Test ETH

For Sepolia testnet:

- [Alchemy Sepolia Faucet](https://www.alchemy.com/faucets/ethereum-sepolia)
- [Sepolia Faucet](https://sepoliafaucet.com/)

## Security

⚠️ **Important:**

- Never commit `.env` files to version control
- Never share your private keys
- Use a separate wallet for development

## License

MIT License

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Made with ❤️ for the Web3 community
