import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`max-w-md w-full mx-auto pt-8 px-4 lg:max-w-7xl lg:px-10`}>
      {children}
    </main>
  );
};
