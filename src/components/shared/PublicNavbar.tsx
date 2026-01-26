import Link from "next/link";
import React from "react";

const PublicNavbar = () => {
  return (
    <header>
      <div>
        <Link href="/" className="flex   items-center justify-center text-xl font-bold text-primary">
          DoctorBro
        </Link>
      </div>
    </header>
  );
};

export default PublicNavbar;
