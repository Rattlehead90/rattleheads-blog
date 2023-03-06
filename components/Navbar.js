import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  
  return(
    <div className="h-20 p-2">
      <div className="flex justify-between max-w-screen-md mx-auto">
        <div className="max-w-3xl flex flex-col">
          <h2 className="font-extrabold sm:text-4xl text-2xl">Rattlehead's Blog</h2>
          <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/">Posts</Link>
            <Link href="/">About me</Link>
          </div>
        </div>
        <div className="flex">
          <Link href="https://github.com/Rattlehead90" className="navbar-icon">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              width={32}
              height={32}
              alt="github logo"
              />
          </Link>
          <Link href="https://www.linkedin.com/in/vadim-strogonov-3040b4169/" className="navbar-icon">
            <Image 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
              width={32}
              height={32}
              alt="linkedin logo"/> 
          </Link>
        </div>
      </div>
    </div>
  );
}