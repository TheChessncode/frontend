"use client"

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ChildProps {
  children: React.ReactNode;
}

export default function PublicPageContainer({ children }: ChildProps) {
    const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) { 
    <Header/>
  }
  return (
    <div>
      <Header />
      <div className="mt-[80px]">{children}</div>
      <Footer />
    </div>
  );
}
