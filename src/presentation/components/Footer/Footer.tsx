import { Box, Grid } from "@chakra-ui/react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
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
  );
};
