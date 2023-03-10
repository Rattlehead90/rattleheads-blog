import Navbar from "@/components/Navbar";
import { Heebo } from "next/font/google";
import { createContext, useEffect, useState } from "react";

const heebo = Heebo({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const DarkContext = createContext();

export default function Layout({ children }) {

  const [dark, setDark] = useState("");

  return (
    <DarkContext.Provider value={setDark}>
      <main className={`${heebo.className} ${dark} h-screen sm:p-0`}>
        <div className="dark:bg-black dark:text-white h-full transition-colors px-8 pb-16">
          <Navbar />
          <section className="max-w-screen-md mx-auto sm:mt-24 mt-8">
            {children}
          </section>
        </div>
      </main>
    </DarkContext.Provider>
  );
}
