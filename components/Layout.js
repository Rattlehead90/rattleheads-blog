import Navbar from "@/components/Navbar";
import { Heebo } from "next/font/google";

const heebo = Heebo({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function Layout({ children }) {

  return (
    <main className={`${heebo.className} h-screen sm:p-0`}>
      <div className="h-full transition-colors px-8 pb-16">
        <Navbar />
        <section className="max-w-screen-md mx-auto sm:mt-24 mt-8">
          {children}
        </section>
      </div>
    </main>
  );
}
