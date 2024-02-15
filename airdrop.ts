import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from './dev-wallet.json';

// Parse the wallet string and convert it to an array of numbers
const walletArray = wallet.wallet.split(",").map(Number);

// Convert the array of numbers to a Uint8Array
const keypair = Keypair.fromSecretKey(new Uint8Array(walletArray));

const connection = new Connection('https://api.devnet.solana.com');

(async () => {
  try {
    const txhash = await connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);
    console.log(`Success! Checkout your TX here: https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch(e){
    console.error(`Oops, something went wrong: ${e}`);
  }
})();
