"use client";
import Footer from "@components/Footer/Footer";
import Sidebar from "@components/Modals/CartTopRightModal";
import ModalExample from "@components/Modals/NotificationModal";
import Nav from "@components/Nav/Nav";
import { Providers } from "@redux/reducer";
import "@styles/globals.css";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./forgotPassword/page";
import Login from "./login/page";
import NewPassword from "./newPassword/page";
import Signup from "./signup/page";
// export const metadata = {
//   title: "PBL6",
//   description: "Đồ án PBL6",
// };

const RootLayout = ({ children }) => {
  const router = usePathname();
  return (
    <html lang="en">
      <body className="relative">
        <Providers>
          <ToastContainer />
          <div className="main">
            <div className="gradient" />
          </div>
          {router.includes("login") ? (
            <Login />
          ) : router.includes("signup") ? (
            <Signup />
          ) : router.includes("forgotPassword") ? (
            <ForgotPassword />
          ) : router.includes("newPassword") ? (
            <NewPassword />
          ) : (
            <main
              id="itemList"
              className="app"
              style={{ minHeight: "1000px", paddingBottom: "320px" }}
            >
              {/* <ProtectedRoute> */}
              <Nav hiddenSearch={router.includes("cart")} />
              {/* <VoiceSearchBox /> */}
              {children}
              {/* </ProtectedRoute> */}
            </main>
          )}
          <ModalExample />
          {!(router.includes("signup") || router.includes("login") ||
            router.includes("forgotPassword") ||
            router.includes("newPassword")) && <Footer />}
          <Sidebar />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
