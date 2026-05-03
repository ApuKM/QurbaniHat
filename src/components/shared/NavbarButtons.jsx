import React from "react";
import { Avatar } from "@heroui/react";
import { Button } from "@heroui/react";
import Link from "next/link";

const NavbarButtons = ({ user, handleSignOut }) => {
  return (
    <div className="">
      {user ? (
        <div className="flex gap-3">
          <Avatar size="sm">
            <Avatar.Image
              alt="User"
              src={user?.image}
              referrerPolicy="no-referrer"
            />
            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
          </Avatar>

          <Button onClick={handleSignOut} size="sm" variant="danger-soft">
            SignOut
          </Button>
        </div>
      ) : (
        <ul className="flex items-center gap-2 text-sm">
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
      )}
    </div>
  );
};

export default NavbarButtons;
