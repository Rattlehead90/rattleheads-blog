import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Navbar() {
  
  return(
    <div className="h-fit p-2 pt-16">
      <div className="flex justify-between max-w-screen-md mx-auto">
        <div className="max-w-3xl flex flex-col">
          <h2 className="font-extrabold sm:text-4xl text-2xl">Rattlehead's Blog</h2>
          <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/">Posts</Link>
            <Link href="/">About me</Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <DropDown>
            <Menu />
          </DropDown>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}

function ThemeButton() {

  return <Link href="#">
    <Image
      src="./icons/bright.svg"
      width={32}
      height={32}
      alt="change theme" />
  </Link>;
}

function DropDown(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center">
      <Link href="#" onClick={() => setOpen(!open)}>
        <Image
          src="./icons/caret.svg"
          className="hover:fill-blue-500"
          width={42}
          height={42}
          alt="dropdown arrow"
       />
      </Link>

      <Transition
        show={open}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        { props.children }
      </Transition>
    </div>
  );
}

function Menu() {
  function MenuItem(props) {
    return (
      <Link href={props.linkPage} className="h-12 flex items-center justify-start gap-3 hover:bg-gray-100 p-2 rounded-md transition-all">
        <span>{props.icon}</span>
        {props.children}
        <span className="ml-auto">{props.arrow}</span>
      </Link>
    );
  }

  return (
    <div className="absolute border-gray-500 border-2 rounded-md p-4 top-[110px] shadow-lg w-56 -translate-x-56 overflow-hidden bg-white">
      <MenuItem 
        icon= {
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            width={32}
            height={32}
            alt="github logo"
          />
        }
        linkPage= "https://github.com/Rattlehead90"
      >
        Github
      </MenuItem>
      <MenuItem 
        icon= {<Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                width={32}
                height={32}
                alt="github logo"
              />}
        linkPage="https://www.linkedin.com/in/vadim-strogonov-3040b4169/"
      >
        LinkedIn
      </MenuItem>
    </div>
  );
}


