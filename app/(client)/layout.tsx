import React from "react";

import Footer from "@/components/Footer/Footer";
import { NavigationMenuDemo } from "@/components/Navbar/NavBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-[#53cac8] pb-12 md:pt-[1px]">
        <NavigationMenuDemo />
        <div className="flex flex-col items-center px-10">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default layout;
