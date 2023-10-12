import React from "react";

import Footer from "@/components/Footer";
import { NavigationMenuDemo } from "@/components/Navbar/NavBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#53cac8] md:pt-[1px]">
      <NavigationMenuDemo />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
