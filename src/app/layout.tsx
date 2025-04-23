import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Barbearia Canoinha",
  description: "A melhor barbearia da região, oferecendo serviços de corte de cabelo, barba e tratamentos premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} bg-gray-900 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
