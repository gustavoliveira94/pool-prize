import { useCallback, useEffect, useState } from "react";
import { Web3 } from "web3";

import { useToast } from "./useToast";
import { useWeb3 } from "../state/web3";

export const useWallet = () => {
  const { toast } = useToast();
  const [{ account, balance }, { setWeb3 }] = useWeb3();

  const connect = async () => {
    if (!window?.ethereum) {
      return toast({
        position: "bottom-right",
        title: "Please, install the metamask!",
        status: "error",
      });
    }

    try {
      const provider = new Web3(window.ethereum);
      const accounts = await provider.eth.requestAccounts();

      if (!accounts?.length) {
        return toast({
          position: "bottom-right",
          title:
            "Please, allow the access to your account to connect in the application!",
          status: "error",
        });
      }

      return setWeb3({ account: accounts?.[0] });
    } catch (e) {
      toast({
        position: "bottom-right",
        title: "Occurred an error to connect your wallet!",
        status: "error",
      });

      return;
    }
  };

  const getBalance = useCallback(async () => {
    try {
      if (!account) {
        return;
      }

      const provider = new Web3(window.ethereum);
      const balance = await provider.eth.getBalance(account);

      setWeb3({ balance: !!balance ? Number(balance) / 10 ** 18 : 0 });
    } catch (e) {
      return;
    }
  }, [account, setWeb3]);

  const disconnect = () => {
    setWeb3({ account: "", balance: 0 });
  };

  useEffect(() => {
    getBalance();
  }, [account, getBalance]);

  return {
    connect,
    disconnect,
    account,
    balance,
  };
};
