/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
} from "./types";
import { EventLog } from "ethers";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type BuyedTicket = ContractEventLog<{
  userAddress: string;
  poolId: string;
  blocktimestamp: string;
  0: string;
  1: string;
  2: string;
}>;
export type Withdraw = ContractEventLog<{
  userAddress: string;
  value: string;
  0: string;
  1: string;
}>;

export interface Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Contract;
  clone(): Contract;
  methods: {
    addAdmin(newAdmin: string): NonPayableTransactionObject<void>;

    buyTicket(poolId: number | string | BN): PayableTransactionObject<void>;

    checkForAdmin(_user: string): NonPayableTransactionObject<boolean>;

    createPrizedaw(id: number | string | BN): NonPayableTransactionObject<void>;

    finishCurrentPrizedaw(): NonPayableTransactionObject<void>;

    getContractBalance(): NonPayableTransactionObject<string>;

    getCurrentPrizedaw(): NonPayableTransactionObject<
      [string, string, string, string[], string[], boolean, string, string]
    >;

    getRewardsAvailable(): NonPayableTransactionObject<string>;

    reawrdsPerUser(arg0: string): NonPayableTransactionObject<string>;

    removeAdmin(newAdmin: string): NonPayableTransactionObject<void>;

    withdraw(): PayableTransactionObject<void>;
  };
  events: {
    BuyedTicket(cb?: Callback<BuyedTicket>): EventEmitter;
    BuyedTicket(
      options?: EventOptions,
      cb?: Callback<BuyedTicket>
    ): EventEmitter;

    Withdraw(cb?: Callback<Withdraw>): EventEmitter;
    Withdraw(options?: EventOptions, cb?: Callback<Withdraw>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "BuyedTicket", cb: Callback<BuyedTicket>): void;
  once(
    event: "BuyedTicket",
    options: EventOptions,
    cb: Callback<BuyedTicket>
  ): void;

  once(event: "Withdraw", cb: Callback<Withdraw>): void;
  once(event: "Withdraw", options: EventOptions, cb: Callback<Withdraw>): void;
}
