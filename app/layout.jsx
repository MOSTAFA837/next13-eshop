import "./globals.scss";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/providers/AuthProvider";
import { ReduxProvider } from "@/store/ReduxProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ReduxProvider>
            <Header />
            {children}
            <Footer />
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
