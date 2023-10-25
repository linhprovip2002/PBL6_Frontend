"use client";
import "@styles/globals.css";
import Nav from "@components/Nav/Nav";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Login from "./login/page";
export const metadata = {
  title: "PBL6",
  description: "Đồ án PBL6",
};

const RootLayout = ({ children }) => {
  const router = usePathname();
  useEffect(() => {
    console.log(router);
  }, [router]);
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        {router.includes("login") ? (
          <Login />
        ) : (
          <main className="app">
            <Nav hiddenSearch={router.includes("cart")} />
            {children}
          </main>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
