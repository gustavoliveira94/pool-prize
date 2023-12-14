import { atom, useRecoilState } from "recoil";

type IWeb3 = {
  account: string;
  balance: number;
};

const web3State = atom({
  key: "Web3",
  default: {} as IWeb3,
});

export const useWeb3 = (): [
  IWeb3,
  { setWeb3: (props: Partial<IWeb3>) => void }
] => {
  const [web3, setWeb] = useRecoilState(web3State);

  return [
    web3,
    {
      setWeb3: (props: Partial<IWeb3>) =>
        setWeb({ ...web3, ...(props as IWeb3) }),
    },
  ];
};
