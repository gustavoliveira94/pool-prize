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
            How does it work?
          </Heading>
          <Divider width="70%" paddingTop="0.5rem" margin= '0 auto 1.875rem auto'  />
          <Text textAlign="center" fontSize="2.1875rem" lineHeight="2.5rem" margin='0 auto 1rem auto'>
          1 - Choose a side of the pool to join.
          </Text>
          <Text textAlign="center" fontSize="2.1875rem" lineHeight="2.5rem" margin='0 auto 1rem auto'>
          2 - Prizes will be distributed if your chosen side is drawn.
          </Text>
          <Text textAlign="center" fontSize="2.1875rem" lineHeight="2.5rem" margin='0 auto 1rem auto'>
          3 - All the money from the losing side goes to the winning side.
          </Text>
   
          <Box width="100%" display="flex" justifyContent="center">
            <a href="#pool">
              <Button
                alignSelf="center"
                width="20rem"
                marginTop="3.125rem"
                backgroundColor="#ff9f1c"
                color="#ffffff"
                fontWeight="600"
                fontSize="1.5rem"
                height="3.125rem"
              >
                Start playing!
              </Button>
            </a>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
