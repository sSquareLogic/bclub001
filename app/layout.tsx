import ScrollProgress from "@/hox/ScrollProgress";
import "./globals.css";

export const metadata = {
  title: "FORCE ACADEMY",
  description: "FORCE ACADEMY - LA MEJOR ACADEMIA DE BARBERÍA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <ScrollProgress>{children}</ScrollProgress>
      </body>
    </html>
  );
}
