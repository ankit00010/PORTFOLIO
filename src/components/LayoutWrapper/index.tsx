"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Navbar";
import SubHeader from "../SubHeader";
import SideBar from "../SideBar";
import Footer from "../Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="layout">
      <header className="header">
        <Navbar />
      </header>

      {!isHome && (
        <div className="subheader">
          <SubHeader />
        </div>
      )}

      {!isHome && (
        <aside className="sidebar">
          <SideBar />
        </aside>
      )}

      <main className="content">{children}</main>

      <footer className="footer"><Footer/></footer>
    </div>
  );
}
