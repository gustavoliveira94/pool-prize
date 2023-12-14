import { SetterOrUpdater, atom, useRecoilState } from "recoil";

const isAdminState = atom({
  key: "isAdmin",
  default: false,
});

export const useIsAdmin = (): [boolean, SetterOrUpdater<boolean>] => {
  const [isAdmin, setIsAdmin] = useRecoilState(isAdminState);

  return [isAdmin, setIsAdmin];
};
