import { useContract } from "./useContract";

export const useDraw = () => {
  const { contract } = useContract();

  const draw = async () => {
    try {
      await contract?.methods.finishCurrentPrizedaw().send();
    } catch (e) {
      return;
    }
  };

  return {
    draw,
  };
};
