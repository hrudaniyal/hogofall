import type { Metadata } from "next";
import { poppins } from "./fonts";
import "./globals.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

export const metadata: Metadata = {
  title: "Hogenakkal Boat Services",
  description:
    "Experience the best boat rides, massage therapy, campfire experiences, and authentic local cuisine in Hogenakkal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
      <Footer />
    </html>
  );
}
