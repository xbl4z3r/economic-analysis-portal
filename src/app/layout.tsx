import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dezechilibrul Inflaționist și Recesiunea Economică | România",
  description: "O analiză asupra contextului economic actual al României, explorând cauzele inflației și riscurile recesiunii.",
  keywords: ["inflație", "recesiune", "economie", "România", "politici economice", "TVA", "impozite"],
  authors: [{ name: "Analiza Economiei României" }],
  openGraph: {
    title: "Dezechilibrul Inflaționist și Recesiunea Economică",
    description: "O analiză asupra contextului economic actual al României",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16 animate-fade-in">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
