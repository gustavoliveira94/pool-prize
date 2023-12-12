import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Button,
} from "@chakra-ui/react";
import { useWallet } from "@/core/hooks/useWallet";

interface UserConnectedProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}

export const UserConnected: React.FC<UserConnectedProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const { account, balance, disconnect } = useWallet();

  return (
    <Popover isOpen={isOpen} onClose={onClose}>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Text fontWeight="600">Connect Information!</Text>
        </PopoverHeader>
        <PopoverBody>
          <Text
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            width="60%"
            overflow="hidden"
          >
            <b>Account:</b> {account}
          </Text>
          <Text
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            width="60%"
            overflow="hidden"
          >
            <b>Balance:</b> {balance}
          </Text>
        </PopoverBody>
        <PopoverFooter display="flex" justifyContent="center">
          <Button
            backgroundColor="red"
            color="#fff"
            onClick={() => {
              disconnect();
              onClose();
            }}
          >
            Disconnect
          </Button>
        </PopoverFooter>
      </PopoverContent>
      <PopoverTrigger>{children}</PopoverTrigger>
    </Popover>
  );
};
