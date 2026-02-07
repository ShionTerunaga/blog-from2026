import { style, globalStyle } from "@vanilla-extract/css";

const prose = style({
  width: "720px",
  maxWidth: "calc(100% - 2em)",
  margin: "2rem auto",
  padding: "1em",
  color: "inherit",
  fontSize: "18px",
  lineHeight: 1.6,
});

const heroImage = style({ width: "100%" });

const title = style({
  marginBottom: "1em",
  padding: "1em 0",
  textAlign: "center",
  lineHeight: 1,
});
const date = style({ marginBottom: "0.5em", color: "rgb(var(--gray))" });
const lastUpdatedOn = style({ fontStyle: "italic" });

globalStyle(`.${heroImage} img`, {
  display: "block",
  margin: "0 auto",
  borderRadius: "12px",
  boxShadow: "var(--box-shadow)",
});

/* VSCode-like syntax highlighting inside the prose container */
globalStyle(`.${prose} pre`, {
  background: "#1e1e1e",
  color: "#d4d4d4",
  padding: "1rem",
  borderRadius: "8px",
  overflow: "auto",
  fontFamily:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', 'Courier New', monospace",
  fontSize: "0.95rem",
});

globalStyle(`.${prose} pre code, .${prose} code`, {
  background: "transparent",
  color: "inherit",
});

globalStyle(
  `.${prose} .token.comment, .${prose} .token.prolog, .${prose} .token.doctype, .${prose} .token.cdata`,
  {
    color: "#6a9955",
  },
);
globalStyle(`.${prose} .token.keyword`, { color: "#569cd6", fontWeight: 600 });
globalStyle(`.${prose} .token.function, .${prose} .token.class-name`, {
  color: "#dcdcaa",
});
globalStyle(
  `.${prose} .token.string, .${prose} .token.char, .${prose} .token.attr-value`,
  { color: "#ce9178" },
);
globalStyle(`.${prose} .token.number`, { color: "#b5cea8" });
globalStyle(`.${prose} .token.operator, .${prose} .token.punctuation`, {
  color: "#d4d4d4",
});
globalStyle(`.${prose} .token.variable, .${prose} .token.property`, {
  color: "#9cdcfe",
});

/* Ensure markdown headings inside prose inherit the page/default color */
globalStyle(
  `.${prose} h1, .${prose} h2, .${prose} h3, .${prose} h4, .${prose} h5, .${prose} h6`,
  {
    color: "inherit",
  },
);

globalStyle(`.${prose} h1`, {
  fontSize: "1.8rem",
  fontWeight: 700,
  margin: "0 0 0.5rem 0",
  lineHeight: 1.15,
});
globalStyle(`.${prose} h2`, {
  fontSize: "1.4rem",
  fontWeight: 700,
  margin: "0 0 0.5rem 0",
  lineHeight: 1.2,
});
globalStyle(`.${prose} h3`, {
  fontSize: "1.25rem",
  fontWeight: 700,
  margin: "0 0 0.5rem 0",
  lineHeight: 1.25,
});
globalStyle(`.${prose} h4`, {
  fontSize: "1.125rem",
  fontWeight: 700,
});
globalStyle(`.${prose} h5`, { fontSize: "1rem", fontWeight: 700 });
globalStyle(`.${prose} h6`, { fontSize: "0.95rem", fontWeight: 700 });

export default {
  prose,
  heroImage,
  title,
  date,
  lastUpdatedOn,
};
