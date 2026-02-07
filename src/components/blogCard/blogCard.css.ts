import { style } from "@vanilla-extract/css";

const card = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "8px",
  padding: "12px",
  width: "160px",
  minHeight: "140px",
  borderRadius: "12px",
  textDecoration: "none",
  color: "inherit",
  background:
    "linear-gradient(180deg, rgba(var(--gray-light),0.04), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.04)",
  transition: "transform 160ms ease, box-shadow 160ms ease",
  selectors: {
    "&:hover, &:focus": {
      boxShadow: "0 0 15px 4px skyBlue",
      transform: "none",
    },
  },
});

const glyph = style({
  marginTop: 20,
  fontSize: "38px",
  lineHeight: 1,
  alignSelf: "center",
});

const title = style({
  fontSize: "14px",
  fontWeight: 700,
  textAlign: "center",
});

const blogCardStyle = {
  card,
  glyph,
  title,
};

export default blogCardStyle;
