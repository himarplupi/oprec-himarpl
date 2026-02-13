import localFont from "next/font/local";

export const fontI = localFont({
  src: [
    {
      path: "./EthnoItalic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-ethno-italic",
  display: "swap",
});
export const fontE = localFont({
  src: [
    {
      path: "./EthnoRegular.otf",
      weight: "400",
    },
  ],
  variable: "--font-ethno",
  display: "swap",
});
export const fontJ = localFont({
  src: [
    {
      path: "./JUMBOTRON.otf",
      weight: "400",
    },
  ],
  variable: "--font-jumbo",
  display: "swap",
});
