import styled from "@emotion/styled";

const Pool = styled("div")(({ selected }: { selected: boolean }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "50%",
  height: "26rem",
  cursor: "pointer",
  opacity: selected ? "1" : "0.8",
  color: selected ? "#80ed99" : "#343a40",
  background: selected ?  "rgba(20, 183, 115, 1)" : "#343a40",
  position: "relative",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
  
  '&:first-child': {
    marginRight: "3rem",
  },
  

  ":hover": {
    opacity: "0.6",
  },
}));


export const PoolStyles = {
  Pool,
};
