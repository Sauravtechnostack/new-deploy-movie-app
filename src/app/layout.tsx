import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans overflow-y-auto overflow-x-hidden w-screen min-h-screen bg-bottom-pattern bg-no-repeat	bg-bottom bg-contain	`}
      >
        {children}
      </body>
    </html>
  );
}
