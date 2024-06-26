import type { Metadata } from "next";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });
export const runtime = "edge";
export const metadata: Metadata = {
  title: "CookieCutter",
  description: "Get curated recipes on the fly",
};
//
//export default function RootLayout({
//  children,
//}: Readonly<{
//  children: React.ReactNode;
//}>) {
//  return (
//    <html lang="en">
//      <body className={inter.className}>{children}</body>
//    </html>
//  );
//}
//

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Nunito } from 'next/font/google'
import { Gabarito } from 'next/font/google'

const libre_franklin = Nunito({
  subsets: ['latin'],
  display: 'swap',
  //variable: '--font-libre_franklin',
})
const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
  //variable: '--font-gabarito',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={libre_franklin+ ' ' + gabarito}>
        {children}
      </body>
    </html>
  )
}
