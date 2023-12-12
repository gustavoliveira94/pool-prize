/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

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
  CardFooter,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { PoolStyles } from "./styles";

export const Home: React.FC = () => {
  const [side, setSide] = useState(0);

  return (
    <Grid display="flex" paddingTop="5rem" justifyContent="center" column={[1]}>
      <Box
        width="100%"
        maxWidth="container.xl"
        display="flex"
        justifyContent="center"
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
        >
          <Card width="50%">
            <CardHeader>
              <Heading as="p" fontSize="1.2rem" paddingBottom="1rem">
                Choose a side to join it!
              </Heading>
              <Divider />
            </CardHeader>
            <CardBody padding="0" display="flex">
              <PoolStyles.Pool selected={side === 1} onClick={() => setSide(1)}>
                <Text fontSize="2.5rem" fontWeight="600">
                  Pool One
                </Text>
              </PoolStyles.Pool>
              <Divider orientation="vertical" />
              <PoolStyles.Pool selected={side === 2} onClick={() => setSide(2)}>
                <Text fontSize="2.5rem" fontWeight="600">
                  Pool Two
                </Text>
              </PoolStyles.Pool>
            </CardBody>
            <CardFooter>
              <Text>
                <b>How to work it?</b> <br />
                You choose a side of the pool and can win prizes when the pool
                is drawn. If your side is chosen, all of the losing side's money
                will be distributed to the winning side. Good luck!
              </Text>
            </CardFooter>
          </Card>
        </Box>
        <Box
          width="50%"
          display="flex"
          justifyContent="flex-end"
          paddingTop="0.5rem"
        >
          <Button disabled={side === 0} rightIcon={<CheckCircleIcon />}>
            Confirm
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};
