import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marc Tinent | Escritor de Cosas",
  description: "Marc Tinent es un escritor de cosas. Aquí encontrarás sus libros, programas de televisión y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
