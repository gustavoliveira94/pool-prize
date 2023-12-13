/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Link from "next/link";
import {
  Grid,
  Heading,
  Divider,
  Box,
  Card,
  CardHeader,
  CardBody,
  Text,
  Button,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { PoolStyles } from "./styles";
import { Hero } from "./components/Hero/Hero";

export const Home: React.FC = () => {
  const [side, setSide] = useState(0);

  return (
    <>
      <Hero />
      <Grid
        id="pool"
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        paddingBottom="4rem"
      >
        <Box
          width="container.xl"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="column"
        >
          <Box width="100%">
            <Heading textAlign="center">Join in the pool prize!</Heading>
            <Divider width="100%" paddingTop="0.5rem" />
          </Box>
          <Box
            width="100%"
            paddingTop="3rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card width="80%" backgroundColor="#343a40">
              <CardHeader>
                <Heading
                  as="p"
                  fontSize="1.2rem"
                  paddingBottom="1rem"
                  color="#fff"
                >
                  MARVEL X DC - Choose a side to join it!
                </Heading>
                <Divider />
              </CardHeader>
              <CardBody padding="0" display="flex">
                <PoolStyles.Pool
                  selected={side === 1}
                  onClick={() => setSide(1)}
                >
                  <Text
                    fontSize="3.5rem"
                    fontWeight="600"
                    color="#fff"
                    fontFamily="'Afacad', sans-serif"
                  >
                    MARVEL
                  </Text>
                </PoolStyles.Pool>
                <Divider orientation="vertical" />
                <PoolStyles.Pool
                  selected={side === 2}
                  onClick={() => setSide(2)}
                >
                  <Text
                    fontSize="3.5rem"
                    fontWeight="600"
                    color="#fff"
                    fontFamily="'Afacad', sans-serif"
                  >
                    DC
                  </Text>
                </PoolStyles.Pool>
              </CardBody>
            </Card>
          </Box>
          <Box
            width="80%"
            display="flex"
            justifyContent="flex-end"
            paddingTop="0.5rem"
          >
            <Button
              backgroundColor="#343a40"
              color="#fff"
              disabled={side === 0}
              rightIcon={<CheckCircleIcon />}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
