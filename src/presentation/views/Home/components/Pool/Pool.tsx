import { useState } from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

import { useDraw } from "@/core/hooks/useDraw";
import { usePool } from "@/core/hooks/usePool";
import { useCheckAdmin } from "@/core/hooks/useCheckAdmin";

import { PoolStyles } from "./styles";

export const Pool: React.FC = () => {
  const [side, setSide] = useState(0);
  const { isAdmin } = useCheckAdmin();
  const { draw } = useDraw();
  const { buyTicket, isFinished, openPool, claim, withDraw, rewards } =
    usePool();

  return (
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
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Heading as="p" fontSize="1.2rem" color="#fff">
                  MARVEL X DC - Choose a side to join it!
                </Heading>
                <Box display="flex" alignItems="center" gap="0.9375rem">
                  <Text color="#fff">
                    <b>Available to claim:</b> {claim || 0} SepoliaETH
                  </Text>
                  <Text color="#fff">
                    <b>Ticket:</b> 0.001 SepoliaETH
                  </Text>
                </Box>
              </Box>
              <Divider marginTop="0.75rem" />
            </CardHeader>
            <CardBody padding="0" display="flex" position="relative">
              <PoolStyles.Pool selected={side === 1} onClick={() => setSide(1)}>
                <Box
                  display="flex"
                  color="#fff"
                  gap="0.625rem"
                  fontSize="12px"
                  position="absolute"
                  bottom="0"
                  left="1.25rem"
                >
                  <Text>
                    <b>People:</b> {rewards.usersPoolA || 0}
                  </Text>
                  <Text>
                    <b style={{ marginRight: 4 }}>Amount:</b>
                    {rewards.amountPoolA || 0} SepoliaETH
                  </Text>
                  <Text>
                    <b>Current Rewards Per User:</b>{" "}
                    {rewards.currentRewardsPerUserPoolA || 0}
                  </Text>
                </Box>
                <Text
                  fontSize="3.5rem"
                  fontWeight="600"
                  color="#fff"
                  fontFamily="'Afacad', sans-serif"
                >
                  MARVEL
                </Text>
              </PoolStyles.Pool>
              <Text
                position="absolute"
                top="35%"
                left="50%"
                color="#fff"
                fontSize="50px"
                fontFamily="'Afacad', sans-serif"
              >
                X
              </Text>
              <PoolStyles.Pool selected={side === 2} onClick={() => setSide(2)}>
                <Box
                  display="flex"
                  color="#fff"
                  gap="0.625rem"
                  fontSize="12px"
                  position="absolute"
                  bottom="0"
                  right="1.25rem"
                >
                  <Text>
                    <b>People:</b> {rewards.usersPoolB || 0}
                  </Text>
                  <Text>
                    <b style={{ marginRight: 4 }}>Amount:</b>
                    {rewards.amountPoolB?.toFixed(5) || 0} SepoliaETH
                  </Text>
                  <Text>
                    <b>Current Rewards Per User:</b>{" "}
                    {rewards.currentRewardsPerUserPoolB?.toFixed(5) || 0}
                  </Text>
                </Box>
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
          {isAdmin && !isFinished ? (
            <Button
              backgroundColor="#ff9f1c"
              color="#fff"
              disabled={side === 0}
              rightIcon={<CheckCircleIcon />}
              marginRight="0.375rem"
              onClick={() => draw()}
            >
              Draw
            </Button>
          ) : null}

          {isAdmin && isFinished ? (
            <Button
              backgroundColor="#57cc99"
              color="#fff"
              disabled={side === 0}
              rightIcon={<CheckCircleIcon />}
              marginRight="0.375rem"
              onClick={() => openPool()}
            >
              Open
            </Button>
          ) : null}

          {claim > 0 ? (
            <Button
              width="9.2rem"
              backgroundColor="#48cae4"
              color="#fff"
              disabled={side === 0}
              rightIcon={<CheckCircleIcon />}
              onClick={() => withDraw()}
              marginRight="0.375rem"
            >
              Claim
            </Button>
          ) : null}

          <Button
            width="9.2rem"
            backgroundColor="#57cc99"
            color="#fff"
            disabled={side === 0}
            rightIcon={<CheckCircleIcon />}
            onClick={() => buyTicket({ id: side })}
            isDisabled={!side || isFinished}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};
