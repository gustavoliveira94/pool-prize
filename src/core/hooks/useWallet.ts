/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useToast } from "./useToast";
import { useWeb3 } from "../states/web3";
import { ethereum } from "../utils/ethereum";
import Web3 from "web3";
import { useCheckAdmin } from "./useCheckAdmin";
import { useContract } from "./useContract";

export const useWallet = () => {
  const { toast } = useToast();
  const [{ account, balance }, { setWeb3 }] = useWeb3();

  const { contract } = useContract();
  const { checkAdmin } = useCheckAdmin();

  const connect = async () => {
    if (!window?.ethereum) {
      return toast({
        position: "bottom-right",
        title: "Please, install the metamask!",
        status: "error",
      });
    }

    try {
      const accounts = await ethereum.eth.requestAccounts();

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

  const getBalance = async () => {
    try {
      if (!account) {
        return;
      }

      const balance = await ethereum.eth.getBalance(account);

      setWeb3({ balance: !!balance ? Number(balance) / 10 ** 18 : 0 });
    } catch (e) {
      return;
    }
  };

  const checkNetwork = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: Web3.utils.toHex(11155111) }],
      });

      await checkAdmin();
    } catch (error) {
      return;
    }
  };

  const disconnect = () => {
    setWeb3({ account: "", balance: 0 });
  };

  useEffect(() => {
    if (account && contract) {
      checkNetwork();
      getBalance();
    }
  }, [account, contract]);

  return {
    connect,
    disconnect,
    account,
    balance,
  };
};
