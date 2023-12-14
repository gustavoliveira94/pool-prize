import { useEffect, useState } from "react";

import { useWeb3 } from "@/core/states/web3";
import { useContract } from "./useContract";
import { useIsAdmin } from "../states/isAdmin";

export const useCheckAdmin = () => {
  const { contract } = useContract();
  const [{ account }] = useWeb3();

  const [isAdmin, setIsAdmin] = useIsAdmin();

  const checkAdmin = async () => {
    try {
      const admin = await contract?.methods.checkForAdmin(account).call();

      return setIsAdmin(Boolean(admin));
    } catch (e) {
      return;
    }
  };

  useEffect(() => {
    if (contract && account) {
      checkAdmin();

      return;
    }

    if (!account) {
      return setIsAdmin(false);
    }
  }, [account, contract]);

  return {
    isAdmin,
    checkAdmin,
  };
};
