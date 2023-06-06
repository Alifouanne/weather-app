import { Nunito } from "next/font/google";
import "./globals.css";
export const metadata = {
  title: "Cloud",
  description: "Weather App",
  icons: {
    icon: "/cloudy.png",
  },
};
const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: "400",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} scroll-smooth`}>
      <body className="font-main">{children}</body>
    </html>
  );
}
