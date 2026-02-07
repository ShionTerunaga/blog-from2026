import { globalFontFace, globalStyle } from "@vanilla-extract/css";

globalFontFace("Atkinson", {
  src: 'url(/fonts/atkinson-regular.woff) format("woff")',
  fontWeight: "400",
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalFontFace("Atkinson", {
  src: 'url(/fonts/atkinson-bold.woff) format("woff")',
  fontWeight: "700",
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalStyle(":root", {
  "--accent-dark": "#000d8a",
  "--black": "15, 18, 25",
  "--gray": "96, 115, 159",
  "--gray-light": "229, 233, 240",
  "--gray-dark": "34, 41, 57",
  "--gray-gradient": "rgba(229, 233, 240, 50%), #fff",
  "--box-shadow":
    "0 2px 6px rgba(96,115,159,0.25), 0 8px 24px rgba(96,115,159,0.33), 0 16px 32px rgba(96,115,159,0.33)",
});

globalStyle("body", {
  fontFamily: "Atkinson, sans-serif",
  margin: 0,
  padding: 0,
  textAlign: "left",
  backgroundColor: "#232323",
  wordWrap: "break-word",
  overflowWrap: "break-word",
  color: "#eaeaea",
  fontSize: "20px",
  lineHeight: 1.7,
});

globalStyle("main", {
  width: "720px",
  maxWidth: "calc(100% - 2em)",
  margin: "auto",
  padding: "3em 1em",
});

globalStyle("h1,h2,h3,h4,h5,h6", {
  margin: "0 0 0.5rem 0",
  color: "rgb(var(--black))",
  lineHeight: 1.2,
});

globalStyle("h1", { fontSize: "3.052em" });
globalStyle("h2", { fontSize: "2.441em" });
globalStyle("h3", { fontSize: "1.953em" });
globalStyle("h4", { fontSize: "1.563em" });
globalStyle("h5", { fontSize: "1.25em" });

globalStyle("strong, b", { fontWeight: 700 });

globalStyle("a", { color: "var(--accent)" });

globalStyle("p", { marginBottom: "1em" });
globalStyle(".prose p", { marginBottom: "2em" });

globalStyle("textarea", { width: "100%", fontSize: "16px" });
globalStyle("input", { fontSize: "16px" });
globalStyle("table", { width: "100%" });
globalStyle("img", { maxWidth: "100%", height: "auto", borderRadius: "8px" });
globalStyle("code", {
  padding: "2px 5px",
  backgroundColor: "rgb(var(--gray-light))",
  borderRadius: "2px",
});
globalStyle("pre", { padding: "1.5em", borderRadius: "8px" });
globalStyle("pre > code", { all: "unset" });
globalStyle("blockquote", {
  borderLeft: "4px solid var(--accent)",
  padding: "0 0 0 20px",
  margin: 0,
  fontSize: "1.333em",
});
globalStyle("hr", {
  border: "none",
  borderTop: "1px solid rgb(var(--gray-light))",
});

globalStyle("@media (max-width: 720px)", {
  body: { fontSize: "18px" },
  main: { padding: "1em" },
});

globalStyle(".sr-only", {
  border: "0",
  padding: 0,
  margin: 0,
  position: "absolute",
  height: "1px",
  width: "1px",
  overflow: "hidden",
  clip: "rect(1px 1px 1px 1px)",
  clipPath: "inset(50%)",
  whiteSpace: "nowrap",
});
