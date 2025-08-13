import type { Metadata } from "next";
import { ThemeProvider } from "@/utils/theme-provider";
import { Inter } from 'next/font/google'
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "@/styles/globals.css";
import "@/styles/fonts.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Zemenay - Empowering Ethiopia's Digital Future",
  description: "Leading technology company providing innovative digital solutions, software development, and IT consulting services in Ethiopia.",
  keywords: "Zemenay, technology, software development, IT consulting, digital transformation, Ethiopia",
  authors: [{ name: "Zemenay" }],
  openGraph: {
    title: "Zemenay - Empowering Ethiopia's Digital Future",
    description: "Leading technology company providing innovative digital solutions, software development, and IT consulting services in Ethiopia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} font-zemenay`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
              {children}
            <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
