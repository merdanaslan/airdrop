import { Keypair } from "@solana/web3.js";

let keypair = Keypair.generate();

console.log("Generated Keypair:");
console.log("Public Key:", keypair.publicKey.toBase58());
console.log("Secret Key:", keypair.secretKey.toString());

// Public Key: 9TAsjXi1F49GauwweHHXiowf5wSeoZoputkmmEZ3vheE
// Secret Key: 64,136,7,242,72,170,223,246,225,145,243,82,216,111,24,215,11,152,147,176,32,128,141,15,141,224,193,214,249,172,46,30,125,145,195,6,139,225,95,109,59,205,131,28,138,178,223,107,203,237,167,80,86,127,131,140,75,179,13,228,244,143,211,183