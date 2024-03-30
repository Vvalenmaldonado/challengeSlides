import localFont from "next/font/local";

import NavBar from "~/components/navBar";
import "~/styles/global.css";


const staff = localFont({
  src: [
    {
      path: "../public/fonts/Staff-Wide-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Staff-Wide-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Staff-Wide-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-staff",
  fallback: ["arial"],
});

const drunk = localFont({
  src: [
    {
      path: "../public/fonts/DrukTextWide-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/DrukTextWide-BoldItalic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-drunk",
  fallback: ["arial"],
});

const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/Helvetica-LT-Ultra-Compressed.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  fallback: ["arial"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-419"
      // className={`${staff.variable} ${drunk.variable} ${helvetica.variable} font-sans touch-auto overflow-auto h-screen relative scrollbar`}
    >
      <body className="flex overflow-auto relative flex-col w-full h-screen">
        <NavBar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
