"use client";

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

export const metadata: Metadata = {
  title: "Gabriel Biscaia's Weather Forecast",
};

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Weather App",
//   description: "Created using Next.js, TypeScript and Tailwind CSS.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
