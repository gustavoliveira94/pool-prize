import { useEffect, useState } from "react";
import { Web3 } from "web3";

import { useToast } from "./useToast";

export const useWallet = () => {
  const { toast } = useToast();

  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0);
  const [isDisconnect, setIsDisconnect] = useState(false);

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

      setIsDisconnect(false);
      return setAccount(accounts?.[0]);
    } catch (e) {
      return;
    }
  };

  const getBalance = async () => {
    try {
      const provider = new Web3(window.ethereum);
      const balance = await provider.eth.getBalance(account);

      setBalance(Number(balance) * 10 ** 18);
    } catch (e) {
      return;
    }
  };

  const disconnect = () => {
    setIsDisconnect(true);
    setAccount("");
  };

  useEffect(() => {
    getBalance();

    if (!isDisconnect) {
      connect();
    }
  }, [account]);

  return {
    connect,
    disconnect,
    account,
    balance,
  };
};
