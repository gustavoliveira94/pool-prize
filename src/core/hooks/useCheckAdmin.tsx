import { useEffect, useState } from "react";

import { useWeb3 } from "@/core/states/web3";
import { useContract } from "./useContract";

export const useCheckAdmin = () => {
  const { contract } = useContract();
  const [{ account }] = useWeb3();

  const [isAdmin, setIsAdmin] = useState(false);

  const checkAdmin = async () => {
    try {
      const admin = await contract?.methods.checkForAdmin(account).call();

      return setIsAdmin(Boolean(admin));
    } catch (e) {
      return;
    }
  };

  useEffect(() => {
    if (account && contract) {
      checkAdmin();
    }
  }, [account, contract]);

  return {
    isAdmin,
  };
};