import { style } from "@vanilla-extract/css";

const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingInline: "5vw",
  height: 66,
  position: "fixed",
  inset: "0 0 auto",
  zIndex: 100,
  backgroundColor: "transparent",
  // keep a strong blur + slight saturation so the header appears transparent but frosted
  backdropFilter: "blur(10px) saturate(120%)",
  WebkitBackdropFilter: "blur(10px) saturate(120%)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
});

const nav = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
});

const right = style({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
});

const siteTitle = style({
  margin: 0,
  fontSize: "1rem",
  fontWeight: 700,
});

const internalLinks = style({
  display: "flex",
  gap: "8px",
  alignItems: "center",
});

const iconLinks = style({
  display: "flex",
  gap: "8px",
  alignItems: "center",
});

const iconButton = style({
  width: "40px",
  height: "40px",
  display: "grid",
  placeItems: "center",
  borderRadius: "10px",
  color: "var(--black)",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.06))",
  border: "1px solid rgba(0,0,0,0.06)",
  transition:
    "transform 160ms ease, box-shadow 160ms ease, background 160ms ease",
  selectors: {
    "&:hover, &:focus": {
      boxShadow: "0 0 15px 4px skyBlue",
      transform: "none",
    },
  },
});

const navAnchor = style({
  padding: "6px 8px",
  color: "inherit",
  textDecoration: "none",
  transition: "box-shadow 160ms ease, transform 160ms ease",
  selectors: {
    "&:hover, &:focus": {
      boxShadow: "0 0 15px 4px skyBlue",
      transform: "none",
    },
  },
});

const hideOnMobile = style({
  "@media": {
    "screen and (max-width: 720px)": {
      display: "none",
    },
  },
});

const headerStyle = {
  header,
  nav,
  right,
  siteTitle,
  internalLinks,
  iconLinks,
  iconButton,
  navAnchor,
  hideOnMobile,
};

export default headerStyle;
