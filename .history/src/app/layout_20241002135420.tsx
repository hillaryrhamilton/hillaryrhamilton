import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { FloatingDockDemo } from "@/components/FloatingDock";
import { Profile } from "@/components/Proifile";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "John Doe - Developer",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "flex antialiased h-screen overflow-hidden bg-gray-100")}>
      <div className='absolute top-0 left-0 right-0'>
        <div className='mx-auto md:hidden h-24 pt-8 pb-12 items-center justify-center flex w-full'>
          <Profile />
      </div>
          <FloatingDockDemo />
          </div>
        <div className="md:flex hidden">
          <Sidebar />
          </div>
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 md:ml-64 flex-1 overflow-y-auto">
          <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
