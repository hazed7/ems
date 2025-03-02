"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { TitleBar } from "@/components/TitleBar";
import { ScrollArea } from "@/components/ui/scroll-area";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn("min-h-screen bg-background font-sans antialiased", `${geistSans.variable} ${geistMono.variable}`)}
            >
                <div className="h-full bg-background text-foreground flex flex-col">
                    <TitleBar />
                    <div className="flex-1 flex overflow-hidden">
                        <ScrollArea className="flex-1">
                            <main className="p-6">
                                {children}
                            </main>
                        </ScrollArea>
                    </div>
                </div>
            </body>
        </html>
    );
}
