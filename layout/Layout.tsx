"use client";

import { Sidebar } from "lucide-react";
import { LayoutProps } from "./LayoutProps";

function Layout({ children }: LayoutProps) {
  return <div>{children}
  </div>;
}

export default Layout;
