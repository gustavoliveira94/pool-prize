import { useEffect, useState } from "react";

import { useWeb3 } from "@/core/states/web3";
import { ethereum } from "@/core/utils/ethereum";
import contractsAbi from "@/configs/abis/contract.json";
import { Contract as IContract } from "mycontract/types";

export const useContract = () => {
  const [{ account }] = useWeb3();

  const [contract, setContract] = useState<IContract>();

  const getContract = () => {
    const contracts = new ethereum.eth.Contract(
      contractsAbi,
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      { from: account }
    ) as unknown as IContract;

    return setContract(contracts);
  };

  useEffect(() => {
    if (account) {
      getContract();
    }
  }, [account]);

  return {
    contract,
  };
};
