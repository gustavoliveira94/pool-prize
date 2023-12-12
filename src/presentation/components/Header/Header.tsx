import { useRef, useState } from "react";
import { useWallet } from "@/core/hooks/useWallet";
import { Container, Button, Heading, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import { UserConnected } from "../UserConnected/UserConnected";

import metaMaskIcon from "@/presentation/assets/metamask.webp";

export const Header: React.FC = () => {
  const { connect, account } = useWallet();

  const popOverRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="80px"
        flexWrap="wrap"
      >
        <Flex>
          <Link href="/">
            <Heading
              padding="0.3125rem 0.625rem"
              backgroundColor="#000"
              fontSize="larger"
              color="#80ed99"
              as="h1"
            >
              POOL PRIZE
            </Heading>
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
      </Container>
    </>
  );
};
