import { Container, Button, Heading, Flex } from "@chakra-ui/react";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
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
        <Button backgroundColor="#fff">Connect Wallet</Button>
      </Flex>
    </Container>
  );
};
