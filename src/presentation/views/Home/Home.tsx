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

export const Home: React.FC = () => {
  const [side, setSide] = useState(0);

  return (
    <>
      <Grid display="flex" justifyContent="center">
        <Box
          width="100%"
          maxWidth="container.xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box
            width="100%"
            height="calc(100vh - 5rem)"
            marginBottom="5rem"
            color="#fff"
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <Heading fontSize="50px" textAlign="center">
              How it works!
            </Heading>
            <Divider width="100%" paddingTop="0.5rem" marginBottom="1.875rem" />
            <Text textAlign="center" fontSize="2.1875rem" lineHeight="2.5rem">
              You choose a side of the pool and can win prizes when the pool is
              drawn. If your side is chosen, all of the losing side's money will
              be distributed to the winning side. Good luck!
            </Text>

            <Button
              alignSelf="center"
              width="20rem"
              marginTop="3.125rem"
              backgroundColor="#ff9f1c"
              color="#fff"
              fontWeight="600"
              fontSize="1.5rem"
              height="3.125rem"
            >
              <a href="#pool">Enjoy us!</a>
            </Button>
          </Box>
        </Box>
      </Grid>
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
      <Grid
        width="100%"
        backgroundColor="#343a40"
        height="6.25rem"
        marginTop="-6.25rem"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="#fff"
        >
          <b style={{ marginRight: 8 }}>Created by:</b>{" "}
          <Link
            href="https://www.linkedin.com/in/gustavoliveira94/"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            Gustavo Oliveira
          </Link>
          ,{" "}
          <Link
            href="https://www.linkedin.com/in/jo%C3%A3o-victor-eth/"
            target="_blank"
            style={{
              marginRight: 5,
              marginLeft: 5,
              textDecoration: "underline",
            }}
          >
            João Victor Ferreira
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.linkedin.com/in/joao-victor-pereira-santos/"
            target="_blank"
            style={{
              marginRight: 5,
              marginLeft: 5,
              textDecoration: "underline",
            }}
          >
            João Victor Santos
          </Link>
        </Box>
      </Grid>
    </>
  );
};
