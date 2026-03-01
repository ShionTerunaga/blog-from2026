import { style } from "@vanilla-extract/css";

const card = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "100%",
  margin: "1rem 0",
  padding: "12px",
  borderRadius: "12px",
  textDecoration: "none",
  color: "inherit",
  background: "rgba(var(--gray-light), 0.22)",
  boxShadow: "0 10px 22px rgba(0, 0, 0, 0.08)",
  transition: "box-shadow 160ms ease, border-color 160ms ease",
  border: "1px solid rgba(var(--gray), 0.14)",
  selectors: {
    "&:hover": {
      boxShadow: "var(--box-shadow)",
      borderColor: "rgba(var(--gray), 0.28)",
    },
  },
});

const main = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  "@media": {
    "screen and (max-width: 720px)": {
      gap: "10px",
    },
  },
});

const content = style({
  flex: 1,
  minWidth: 0,
});

const title = style({
  display: "block",
  fontWeight: 700,
  fontSize: "0.95rem",
  lineHeight: 1.3,
});

const description = style({
  display: "-webkit-box",
  fontSize: "0.78rem",
  lineHeight: 1.35,
  color: "rgb(var(--gray))",
  marginTop: "4px",
  overflow: "hidden",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
});

const domain = style({
  display: "block",
  fontSize: "0.76rem",
  color: "rgb(var(--gray))",
  marginTop: "6px",
});

const image = style({
  width: "112px",
  flexShrink: 0,
  marginLeft: "auto",
  height: "72px",
  borderRadius: "8px",
  objectFit: "cover",
  backgroundColor: "rgba(var(--gray-light), 0.35)",
  "@media": {
    "screen and (max-width: 720px)": {
      width: "96px",
      height: "64px",
    },
  },
});

const linkCardStyle = {
  card,
  main,
  content,
  title,
  description,
  domain,
  image,
};

export default linkCardStyle;
