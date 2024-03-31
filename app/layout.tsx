import type { Metadata } from "next";
import NavBar from "~/components/navBar";
import "~/styles/global.css";

import { Inter, Lato } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "600"],
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Angela Smith",
  description: "Challenge for the company Slides by Valentina Maldonado",
  keywords: ["Challenge", "Slides", "React", "Typescript", "Next.js"],
  metadataBase: new URL("https://sitio.com"),
  authors: [{ name: "Valentina Maldonado", url: "https://nextjs.org" }],
  icons: {
    icon: "/next.svg",
    shortcut: "/shortcut-icon.png",
    apple: "/next.svg",
  },
  alternates: {
    canonical: "https://sitio.com/",
  },
  openGraph: {
    title: "Angela Smith",
    description: "Challenge for the company Slides by Valentina Maldonado",
    url: "https://sitio.com/",
    images: "/path-to-your-image.jpg",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-419"
      className={`${inter.variable} ${lato.variable} touch-auto overflow-auto h-full relative scrollbar `}
    >
      <body className="flex overflow-auto relative flex-col w-full h-full">
        <NavBar />
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
