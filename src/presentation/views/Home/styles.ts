import styled from "@emotion/styled";

const Pool = styled("div")(({ selected }: { selected: boolean }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
  height: "15rem",
  cursor: "pointer",
  opacity: selected ? "1" : "0.8",
  color: selected ? "#80ed99" : "#343a40",

  ":hover": {
    opacity: "0.6",
  },
}));

export const PoolStyles = {
  Pool,
};
