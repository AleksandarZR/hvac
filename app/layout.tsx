import type { Metadata } from "next";
import localFont from "next/font/local";
import Navigation from "./components/navigation/index";
import NavigationVertical from "./components/navigation-vertical/index";
import "./globals.css";

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

export const metadata: Metadata = {
    title: "Hvac",
    description: "Hvac",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
                {/* <Navigation /> */}
                {/* <NavigationVertical /> */}
            </body>
        </html>
    );
}
