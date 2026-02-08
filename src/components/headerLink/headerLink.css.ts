import { style } from "@vanilla-extract/css";

const link = style({
  display: "inline-block",
  textDecoration: "none",
  transition: "box-shadow 160ms ease, transform 160ms ease",
  selectors: {
    "&:hover": {
      boxShadow: "0 0 15px 4px skyBlue",
      transform: "none",
    },
  },
});

const active = style({
  fontWeight: "bolder",
  textDecoration: "underline",
});

const headerLinkStyle = { link, active };

export default headerLinkStyle;
