/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Divider, Grid, Heading, Text } from "@chakra-ui/react";

export const Hero: React.FC = () => {
  return (
    <Grid display="flex" justifyContent="center">
      <Box
        width="100%"
        maxWidth="container.xl"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginBottom="3.125rem"
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
          <Heading fontSize="3.125rem" textAlign="center">
            How it works!
          </Heading>
          <Divider width="100%" paddingTop="0.5rem" marginBottom="1.875rem" />
          <Text textAlign="center" fontSize="2.1875rem" lineHeight="2.5rem">
            You choose a side of the pool and can win prizes when the pool is
            drawn. If your side is chosen, all of the losing side's money will
            be distributed to the winning side. Good luck!
          </Text>

          <Box width="100%" display="flex" justifyContent="center">
            <a href="#pool">
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
                Enjoy us!
              </Button>
            </a>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
