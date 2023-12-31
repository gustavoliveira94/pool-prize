import { useRef, useState } from "react";
import { useWallet } from "@/core/hooks/useWallet";
import { Button, Heading, Flex, Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import poolPrize from '@/presentation/assets/pool-prize.png';
import { UserConnected } from "../UserConnected/UserConnected";

import metaMaskIcon from "@/presentation/assets/metamask.webp";

export const Header: React.FC = () => {
  const { connect, account } = useWallet();

  const popOverRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      width="100%"
      backgroundColor="#343a40"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80px"
      position="fixed"
      zIndex={100}
    >
      <Flex
        maxW="container.xl"
        width="100%"
        display="flex"
        justifyContent="center"
        gap= '0 50%'
        alignItems="center"
        flexWrap="wrap"
      >
        <Flex>
          <Link href="/">
           <Image src={poolPrize} alt = 'pool prize logo' width={120} />
          </Link>
        </Flex>
        <Flex>
          <UserConnected isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Button
              ref={popOverRef}
              backgroundColor="#fff"
              onClick={() => (account ? setIsOpen(true) : connect())}
            >
              <Image
                width={20}
                height={20}
                src={metaMaskIcon}
                alt="metamask icon"
              />
              <Text
                marginLeft="0.625rem"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                width="7rem"
                overflow="hidden"
              >
                {account || "Connect Wallet"}
              </Text>
            </Button>
          </UserConnected>
        </Flex>
      </Flex>
    </Box>
  );
};
