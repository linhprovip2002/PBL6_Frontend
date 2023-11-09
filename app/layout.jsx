"use client";
import Nav from "@components/Nav/Nav";
import { Providers } from "@redux/reducer";
import "@styles/globals.css";
import { usePathname } from "next/navigation";
import Login from "./login/page";
import Signup from "./signup/page";
export const metadata = {
  title: "PBL6",
  description: "Đồ án PBL6",
};

const RootLayout = ({ children }) => {
  const router = usePathname();
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="main">
            <div className="gradient" />
          </div>
          {router.includes("login") ? (
            <Login />
          ) : router.includes("signup") ? (
            <Signup />
          ) : (
            <main className="app">
              <Nav hiddenSearch={router.includes("cart")} />
              {children}
            </main>
          )}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
