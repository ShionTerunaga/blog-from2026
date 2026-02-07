import { style } from "@vanilla-extract/css";

const card = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 16px",
  borderRadius: "12px",
  textDecoration: "none",
  color: "inherit",
  background: "linear-gradient(180deg, rgba(var(--gray-light),0.9), #fff)",
  boxShadow: "var(--box-shadow)",
  transition: "transform 160ms ease, box-shadow 160ms ease",
  border: "1px solid rgba(var(--gray), 0.06)",
  selectors: {
    "&:hover, &:focus": {
      boxShadow: "0 0 15px 4px skyBlue",
      transform: "none",
    },
  },
});

const emoji = style({
  fontSize: "28px",
  lineHeight: 1,
  width: "40px",
  height: "40px",
  display: "grid",
  placeItems: "center",
  borderRadius: "10px",
  background: "linear-gradient(180deg, #fff, rgba(var(--gray-light),0.8))",
});

const content = style({});

const title = style({ fontWeight: 700, fontSize: "0.98em" });

const label = style({
  fontSize: "0.85em",
  color: "rgb(var(--gray))",
  marginTop: "2px",
});

const linkCardStyle = { card, emoji, content, title, label };

export default linkCardStyle;
