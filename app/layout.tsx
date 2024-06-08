import React from "react";

export const metadata = {
  title: "Promptopia",
  description: "Discover and share AI prompts",
};

interface LayoutProps{
    children: React.ReactNode;


}
const RootLayout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <div className="main">
        <div className="gradient"></div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;
