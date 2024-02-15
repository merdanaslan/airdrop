import { Keypair } from "@solana/web3.js";
import prompt from 'prompt-sync';
import * as bs58 from 'bs58';

let kp = Keypair.generate();
console.log(`You've generated a new Solana wallet:
${kp.publicKey.toBase58()}`);
console.log("Secret Key:", kp.secretKey.toString());


const options = {
    sigint: true, // Allow Ctrl+C to terminate the prompt
};

function base58_to_wallet(): void {
    console.log("Enter your base58 string:");
    const base58 =  (prompt as any)(options)(); // Use type assertion to bypass type checking
    const wallet = bs58.decode(base58).toString();
    console.log(wallet);
}

function wallet_to_base58(): void {
    const walletHex = "Hg2VnHSYrZtAgJ6i3dBNvPQUUpgRAosRsXehsVcRg9Qx";
    const walletBuffer: Buffer = Buffer.from(walletHex, 'hex');

    const base58 = bs58.encode(walletBuffer).toString();
    console.log(base58);
}

// Call the functions
base58_to_wallet();
wallet_to_base58();
