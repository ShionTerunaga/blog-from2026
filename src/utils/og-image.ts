import satori from "satori";
import { type CSSProperties } from "satori/jsx";
import sharp from "sharp";
import notoSansJpData from "../assets/fonts/NotoSansJP-Bold.otf?inline";
import iconData from "../assets/icon.jpg?inline";

const WIDTH = 1200;
const HEIGHT = 630;

function decodeDataUrl(dataUrl: string) {
  const encodedData = dataUrl.split(",", 2)[1];
  if (!encodedData) {
    throw new TypeError("The embedded font is not a valid data URL.");
  }

  return Buffer.from(encodedData, "base64");
}

const notoSansJp = decodeDataUrl(notoSansJpData);

type ElementNode = {
  type: string;
  props: Record<string, unknown>;
  key: null;
};

type ElementChild = ElementNode | string | number;

function element(
  type: string,
  props: Record<string, unknown>,
  ...children: ElementChild[]
): ElementNode {
  return {
    type,
    props: children.length ? { ...props, children } : props,
    key: null,
  };
}

function div(style: CSSProperties, ...children: ElementChild[]) {
  return element("div", { style }, ...children);
}

function siteName() {
  return div(
    {
      display: "flex",
      alignItems: "center",
      height: 24,
      color: "#aeb4be",
      fontSize: 22,
      letterSpacing: 3,
    },
    div({
      width: 62,
      height: 7,
      marginRight: 18,
      borderRadius: 4,
      backgroundColor: "#87ceeb",
    }),
    div({ display: "flex" }, "TERUSI'S BLOG"),
  );
}

function author() {
  return div(
    {
      display: "flex",
      alignItems: "center",
      flex: 1,
      paddingTop: 28,
    },
    div(
      {
        width: 92,
        height: 92,
        display: "flex",
        padding: 4,
        borderRadius: 999,
        backgroundColor: "#87ceeb",
      },
      element("img", {
        src: iconData,
        width: 84,
        height: 84,
        style: { borderRadius: 999, objectFit: "cover" },
      }),
    ),
    div({ display: "flex", marginLeft: 24, fontSize: 30 }, "てるし〜"),
  );
}

function card(title: string) {
  return element(
    "div",
    {
      lang: "ja-JP",
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "84px 92px 58px",
        color: "#f5f6f7",
        backgroundImage:
          "radial-gradient(circle at 88% 0%, rgba(135, 206, 235, 0.2), transparent 38%), linear-gradient(135deg, #17191d, #292d34)",
        fontFamily: "Noto Sans JP",
        fontWeight: 700,
        position: "relative",
      },
    },
    siteName(),
    div(
      {
        width: "100%",
        height: 325,
        display: "flex",
        alignItems: "center",
        fontSize: 68,
        lineHeight: 1.32,
        letterSpacing: -1,
        overflow: "hidden",
        wordBreak: "normal",
        lineClamp: 3,
      },
      div({ display: "flex" }, title),
    ),
    div({
      width: "100%",
      height: 1,
      backgroundColor: "rgba(255, 255, 255, 0.12)",
    }),
    author(),
  );
}

export async function createOgImage(title: string) {
  // Satori's built-in JSX runtime and its renderer expose different node types.
  const element = card(title) as Parameters<typeof satori>[0];
  const svg = await satori(element, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      {
        name: "Noto Sans JP",
        data: notoSansJp,
        weight: 700,
        style: "normal",
      },
    ],
  });

  return sharp(Buffer.from(svg)).png().toBuffer();
}
