import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`max-w-7xl w-full mx-auto pt-8 px-2 lg:px-10`}>
      {children}
    </main>
  );
};
