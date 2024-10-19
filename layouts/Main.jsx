import { Outlet } from "react-router-dom";
import Footer from "../pages/main/shared/Footer";
import Header from "../pages/main/shared/Header";

const Main = () => {
  return (
    <div className="dark:bg-neutral-900 poppins pt-4">
      {/* header */}
      <Header />

      {/* main layout */}
      <main className="min-h-[calc(100vh-188px)]">
        <Outlet />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Main;
