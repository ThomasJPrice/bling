import { Toaster } from "react-hot-toast";
import "./globals.css";
import localFont from 'next/font/local'
import Script from "next/script";

export const metadata = {
  title: "BLING",
  description: "Take on exciting fitness challenges, track your progress with Strava, and earn exclusive medals for your achievements. Start your journey today!"
};

const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2',
  display: 'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          defer
          src='https://cloud.umami.is/script.js'
          data-website-id='87f9f0d5-b03f-44f0-86d0-d7c434ad4b9c'
        />
      </head>

      <body
        className={`${satoshi.className}`}
      >
        {children}

        <Toaster />
      </body>
    </html>
  );
}
