import "@styles/globals.css";
import Nav from "@components/Nav/Nav";

export const metadata = {
  title: "PBL6",
  description: "Đồ án PBL6",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
