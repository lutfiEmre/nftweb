import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./css/extra.css";

// Fontlarınızı ayarlayın
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata tanımı
export const metadata: Metadata = {
  title: "Activ8earth Website",
  description: "activate to live - activ8earth",
  openGraph: {
    title: "Activ8earth Website",
    description: "activate to live - activ8earth",
    url: "https://app.activ8earth.com/",
    images: [
      {
        url: "/preview-image.png",
        width: 1200,
        height: 630,
        alt: "Activ8earth Website Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Activ8earth Website",
    description: "activate to live - activ8earth",
    images: ["/preview-image.png"],
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
      <link rel="alternate icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {children}
      </body>
      </html>
  );
}
