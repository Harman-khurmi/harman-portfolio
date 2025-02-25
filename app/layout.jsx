import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider"

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
});

export const metadata = {
  title: "Harman Khurmi",
  description: "Harman Khurmi's personal website",
  url: "https://harman.khurmi.dev",
  type: "website",
  siteName: "Harman Khurmi",
  email: "harmankhurmi365@gmail.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}