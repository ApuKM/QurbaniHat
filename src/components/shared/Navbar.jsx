"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b px-3">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image src={"/Q-logo.jpg"} alt="logo" width={30} height={30} />
          <h3 className="text-(--primary) text-lg sm:text-xl font-semibold">
            QurbaniHat
          </h3>
        </div>
        <ul className="hidden md:flex items-center gap-5 text-sm font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-animals">All Animals</Link>
          </li>
        </ul>
        <ul className="hidden md:flex items-center gap-2 text-sm">
          <li>
            <Link href="/signup">
              <Button size="sm" className="bg-(--accent) text-white">
                SignUp
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/signin">
              <Button size="sm" className="bg-(--accent) text-white">
                SignIn
              </Button>
            </Link>
          </li>
        </ul>
        <button
          className="md:hidden text-xl text-(--primary)"
          onClick={() => setOpen(!open)}
        >
          <FaHamburger />
        </button>
      </nav>
      {open && (
        <div className="md:hidden flex flex-col gap-4 pb-4 font-medium">
          <Link href="/">Home</Link>
          <Link href="/all-animals">All Animals</Link>

          <div className="flex items-center gap-4">
            <Link href="/signup">
              <Button className=" bg-(--accent) text-white">SignUp</Button>
            </Link>

            <Link href="/signin">
              <Button className="bg-(--accent) text-white">SignIn</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
