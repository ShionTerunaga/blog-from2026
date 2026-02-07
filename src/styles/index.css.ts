import { style } from "@vanilla-extract/css";

const intro = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.75rem",
  maxWidth: "720px",
  margin: "2.5rem auto",
  padding: "1rem",
});

const avatar = style({
  width: "96px",
  height: "96px",
  display: "grid",
  placeItems: "center",
  borderRadius: "50%",
  overflow: "hidden",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
});

const avatarImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  borderRadius: "50%",
});

const bio = style({ textAlign: "center" });

const bioTitle = style({
  margin: 0,
  fontSize: "0.95rem",
  color: "inherit",
  fontWeight: 400,
});

const bioText = style({
  margin: 0,
  fontSize: "0.95rem",
  color: "inherit",
});

const indexPageStyles = {
  intro,
  avatar,
  bio,
  bioTitle,
  bioText,
};

export default indexPageStyles;
