import PublicNavbar from "@/components/shared/PublicNavbar";
import React from "react";

const commonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PublicNavbar />
      {children}
      <footer></footer>
    </>
  );
};

export default commonLayout;
