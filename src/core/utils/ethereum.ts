import { Web3 } from "web3";

export const ethereum = global?.window && new Web3(window?.ethereum);
