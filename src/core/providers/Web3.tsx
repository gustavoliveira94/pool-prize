import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";
import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";

interface IWeb3Provider {
  children: JSX.Element;
}

type IConnectorProps = any[];

export const [metaMask, hooks] = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions })
);

const connectors: IConnectorProps = [[metaMask, hooks]];

export const Web3Provider: React.FC<IWeb3Provider> = ({ children }) => {
  return (
    <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>
  );
};
