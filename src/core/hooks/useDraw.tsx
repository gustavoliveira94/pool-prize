import { useState } from "react";
import { useContract } from "./useContract";

export const useDraw = () => {
  const { contract } = useContract();
  const [trigger, setTrigger] = useState(false);

  const draw = async () => {
    try {
      await contract?.methods.finishCurrentPrizedaw().send();

      setTrigger(true);
    } catch (e) {
      return;
    }
  };

  return {
    draw,
    trigger,
    setTrigger,
  };
};
