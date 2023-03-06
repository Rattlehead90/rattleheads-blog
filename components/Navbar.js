import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  
  return(
    <div className="h-[80px] p-2  bg-gray-200">
      <div className="flex justify-between max-w-screen-md mx-auto">
        <div className="max-w-3xl flex flex-col">
          <h2 className="font-extrabold sm:text-4xl text-2xl">Rattlehead's Blog</h2>
          <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/">Posts</Link>
            <Link href="/">About me</Link>
          </div>
        </div>
        <DropDown>
          <Menu />
        </DropDown>
      </div>
    </div>
  );
}

function DropDown(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Link href="#" onClick={() => setOpen(!open)}>
        <Image
          src="./icons/caret.svg"
          width={32}
          height={32}
          alt="dropdown arrow" />
      </Link>

      { open && props.children }
    </div>
  );
}

function Menu() {
  function MenuItem(props) {
    return (
      <Link href="#" className="h-12 flex items-center justify-start gap-3 hover:bg-gray-100 p-2 rounded-md transition-all">
        <span>{props.icon}</span>
        {props.children}
        <span className="ml-auto">{props.arrow}</span>
      </Link>
    );
  }

  return (
    <div className="absolute border-gray-500 border-2 rounded-md p-4 top-[50px] shadow-lg w-64 -translate-x-56 overflow-hidden bg-white">
      <MenuItem 
        icon= {
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            width={32}
            height={32}
            alt="github logo"
          />
        }
        arrow= {
          <Image
          src="./icons/arrow.svg"
          width={14}
          className="rotate-180"
          height={14}
          alt="arrow pic" />
        }
      >
        Where to find me
      </MenuItem>
      <MenuItem 
        icon= {<Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                width={32}
                height={32}
                alt="github logo"
              />}
      >
        Change theme
      </MenuItem>
    </div>
  );
}


