import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abuzar Sayyed | Vibe Code Developer",
  description:
    "Portfolio of Abuzar Sayyed – Vibe Code Developer specializing in landing pages and modern web solutions.",
  keywords: ["portfolio", "developer", "landing page", "web solutions", "Abuzar Sayyed"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-white">
        {children}
      </body>
    </html>
  );
}
