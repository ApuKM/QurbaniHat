import { Urbanist } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import "animate.css";

export const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Qurbanihat",
  description: "Best online qurbanihat in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${urbanist.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
