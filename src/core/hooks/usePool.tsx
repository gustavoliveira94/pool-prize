import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { ethers } from "ethers";

import { useContract } from "./useContract";
import { useWeb3 } from "../states/web3";
import { useWallet } from "./useWallet";

interface IRewards {
  amountPoolA: number;
  amountPoolB: number;
  currentRewardsPerUserPoolA: number;
  currentRewardsPerUserPoolB: number;
  usersPoolA: number;
  usersPoolB: number;
}

export const usePool = () => {
  const { contract } = useContract();
  const toast = useToast();
  const [{ account }] = useWeb3();

  const [claim, setClaim] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [rewards, setRewards] = useState<IRewards>({} as IRewards);

  const [trigger, setTrigger] = useState(false);

  const openPool = async () => {
    try {
      await contract?.methods.createPrizedaw(100).send();

      toast({
        title: "Pool created successful!",
        position: "bottom-right",
        status: "success",
      });

      setTrigger(!trigger);
    } catch (e) {
      toast({
        title: "Pool was not created!",
        position: "bottom-right",
        status: "error",
      });
      return;
    }
  };

  const buyTicket = async ({ id }: { id: number }) => {
    try {
      await contract?.methods
        .buyTicket(id)
        .send({ value: Number(ethers.parseEther("0.001")) });

      toast({
        title: "Transaction successful!",
        position: "bottom-right",
        status: "success",
      });

      setTrigger(!trigger);
    } catch (e) {
      toast({
        title: "Transaction error!",
        position: "bottom-right",
        status: "error",
      });
    }
  };

  const availableClaim = async () => {
    try {
      const claim = await contract?.methods.getRewardsAvailable().call();

      setTrigger(!trigger);

      setClaim(Number(claim) / 10 ** 18);
    } catch (e) {
      return;
    }
  };

  const checkFinishedPool = async () => {
    try {
      const pool = await contract?.methods.getCurrentPrizedaw().call();

      setTrigger(!trigger);

      setIsFinished(Boolean(pool?.["isFinished" as keyof typeof pool]));
    } catch (e) {
      return;
    }
  };

  const withDraw = async () => {
    try {
      await contract?.methods.withdraw().send();

      toast({
        title: "Withdraw successful!",
        position: "bottom-right",
        status: "success",
      });

      setTrigger(!trigger);
    } catch (e) {
      toast({
        title: "Withdraw error!",
        position: "bottom-right",
        status: "error",
      });
      return;
    }
  };

  const getRewards = async () => {
    try {
      const result = await contract?.methods.getCurrentPrizedaw().call();

      const formatResult = {
        amountPoolA:
          Number(result?.["amountPoolA" as keyof typeof result]) / 10 ** 18,
        amountPoolB:
          Number(result?.["amountPoolB" as keyof typeof result]) / 10 ** 18,
        currentRewardsPerUserPoolA:
          Number(
            result?.["currentRewardsPerUserPoolA" as keyof typeof result]
          ) /
          10 ** 18,
        currentRewardsPerUserPoolB:
          Number(
            result?.["currentRewardsPerUserPoolB" as keyof typeof result]
          ) /
          10 ** 18,
        usersPoolA: (result?.["usersPoolA" as keyof typeof result] as any[])
          ?.length,
        usersPoolB: (result?.["usersPoolB" as keyof typeof result] as any[])
          ?.length,
      };

      setTrigger(!trigger);

      return setRewards(formatResult);
    } catch (e) {
      return;
    }
  };

  useEffect(() => {
    availableClaim();
    checkFinishedPool();
    getRewards();
  }, [account, trigger]);

  return {
    buyTicket,
    claim,
    isFinished,
    openPool,
    withDraw,
    rewards,
  };
};
