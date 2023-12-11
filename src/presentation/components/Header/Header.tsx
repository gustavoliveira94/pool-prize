import { Heading, Box, Button } from "@chakra-ui/react";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <Box
      w="100%"
      p={4}
      padding="0.5rem 2.5rem"
      color="white"
      display="flex"
      justifyContent="space-between"
    >
      <Link href="/">
        <Heading
          fontFamily="'Afacad', sans-serif"
          backgroundColor="black"
          width="5rem"
          textAlign="center"
          fontSize="1.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          BREX
        </Heading>
      </Link>
      <Button backgroundColor="#000" variant="solid" color="#fff">
        Connect Wallet
      </Button>
    </Box>
  );
};
