'use client';
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { SelectedOptionProvider } from "@/hooks/useOption";
import ToastProvider from "@/components/ToastProvider";

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <ThemeProvider theme={theme}>
                <body className={nunito.className}>
                    <ToastProvider>
                        <SelectedOptionProvider>
                            {children}
                        </SelectedOptionProvider>
                    </ToastProvider>
                </body>
            </ThemeProvider>
        </html>
    );
}
