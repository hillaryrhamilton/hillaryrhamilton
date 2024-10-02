import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`lg:max-w-7xl w-full mx-auto pt-8 px-4 lg:px-10`}>
      {children}
    </main>
  );
};
