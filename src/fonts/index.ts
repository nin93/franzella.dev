import { Lora, Roboto_Condensed, Roboto_Mono } from "next/font/google";

export const FONT_SERIF = Lora({
  variable: "--font-setup-serif",
  display: "swap",
  subsets: ["latin"],
});

export const FONT_SANS = Roboto_Condensed({
  variable: "--font-setup-sans",
  display: "swap",
  subsets: ["latin"],
});

export const FONT_MONO = Roboto_Mono({
  variable: "--font-setup-mono",
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

const mod = { FONT_SERIF, FONT_MONO };

export default mod;
