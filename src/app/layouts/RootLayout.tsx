import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}