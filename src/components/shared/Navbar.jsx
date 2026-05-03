"use client";

import Image from "next/image";
import Link from "next/link";
import { BasicDrawer } from "./Drawer";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

import NavbarButtons from "./NavbarButtons";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };
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
          <div className="hidden md:block">
        <NavbarButtons user={user} handleSignOut={handleSignOut}/>
    </div>
        <div className="md:hidden">
          <BasicDrawer user={user} handleSignOut={handleSignOut}/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
