import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mai Anh — UX & Creative Design Practice",
    template: "%s — Mai Anh",
  },
  description: "Mai Anh is a UX designer crafting creative digital experiences through curiosity, research and relentless iteration.",
  openGraph: {
    title: "Mai Anh — UX & Creative Design Practice",
    description: "Selected UX design, product design and creative direction work.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
