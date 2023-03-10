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
      <main className={`${heebo.className} h-screen ${dark} px-4 sm:p-0`}>
        <div className="h-screen dark:bg-black dark:text-white transition-colors">
          <Navbar />
          <section className="max-w-screen-md mx-auto sm:mt-24 mt-8">
            {children}
          </section>
        </div>
      </main>
    </DarkContext.Provider>
  );
}
