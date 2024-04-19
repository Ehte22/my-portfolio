import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ehtesham Syed | Full Stack Mern Developer",
  description: "React, Redux, Next Js, MongoDb, PosrgreSQL, Node Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className="dark"> */}
      <body className="dark:bg-gray-900">
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html >
  );
}
