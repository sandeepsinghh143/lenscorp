import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LENS Corporation | Biometrics & Computer Vision",
  description: "LENS Corporation | Biometrics & Computer Vision",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <body className={inter.className+" text-lg w-screen overflow-x-hidden"}>
        <ThemeProvider attribute="class" storageKey = 'theme'>
          <Header/>
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
