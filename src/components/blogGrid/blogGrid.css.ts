import { style } from "@vanilla-extract/css";

const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
  gap: "16px",
  listStyle: "none",
  margin: 0,
  padding: 0,
  alignItems: "start",
});

const listItem = style({
  display: "flex",
  justifyContent: "center",
});

const blogGridStyle = { grid, listItem };

export default blogGridStyle;
