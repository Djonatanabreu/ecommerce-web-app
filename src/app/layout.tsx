import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./global.css";
import StyledJsxRegistry from "@/lib/registry";
import Header from "@/components/layout/header/header";

const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "E-Commerce Wyrn",
  description: "All you want at the same place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <StyledJsxRegistry>
          <Header />
          {children}
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
