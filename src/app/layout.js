import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import ClientFooter from "@/components/ClientFooter"; // ✅ changed

const sans = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata = {
  title: "MVI Lab",
  description: "Machine Learning Vision Lab at NIT Jamshedpur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.className} bg-gray-50`} suppressHydrationWarning>
        <Providers>
          {children}
          <ClientFooter /> {/* ✅ changed */}
        </Providers>
      </body>
    </html>
  );
}
