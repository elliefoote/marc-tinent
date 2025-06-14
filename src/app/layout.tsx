import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marc Tinent | Escritor de Cosas",
  description: "Soy Marc Tinent. Escribo cosas. Como novelas, tebeos, series, programas de entretenimiento para TV y copy de todo tipo. Y si me pongo, hasta postales de Navidad.",
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
