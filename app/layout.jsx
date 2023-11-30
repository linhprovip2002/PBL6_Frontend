"use client";
import Sidebar from "@components/Modals/CartTopRightModal";
import ModalExample from "@components/Modals/NotificationModal";
import Nav from "@components/Nav/Nav";
import { Providers } from "@redux/reducer";
import "@styles/globals.css";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./login/page";
import Signup from "./signup/page";
// export const metadata = {
//   title: "PBL6",
//   description: "Đồ án PBL6",
// };

const RootLayout = ({ children }) => {
  const router = usePathname();
  return (
    <html lang="en">
      <body>
        <Providers>
          <ToastContainer />
          <div className="main">
            <div className="gradient" />
          </div>
          {router.includes("login") ? (
            <Login />
          ) : router.includes("signup") ? (
            <Signup />
          ) : (
            <main id="itemList" className="app">
              {/* <ProtectedRoute> */}
              <Nav hiddenSearch={router.includes("cart")} />
              {/* <VoiceSearchBox /> */}
              {children}
              {/* </ProtectedRoute> */}
            </main>
          )}
          <ModalExample />
          <Sidebar />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
