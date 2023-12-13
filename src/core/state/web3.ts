import { atom, useRecoilState, SetterOrUpdater } from "recoil";

type IWeb3 = {
  account: string;
  balance: number;
};

const web3State = atom({
  key: "web3",
  default: {} as IWeb3,
});

export const useWeb3 = (): [
  IWeb3,
  { setWeb3: (props: Partial<IWeb3>) => void }
] => {
  const [web3, setWeb3] = useRecoilState(web3State);

  return [
    web3,
    { setWeb3: (props: Partial<IWeb3>) => setWeb3({ ...web3, ...props }) },
  ];
};
