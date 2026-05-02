import { Button, Drawer } from "@heroui/react";
import { FaHamburger } from "react-icons/fa";
import Link from "next/link";

export function BasicDrawer() {
  return (
    <Drawer>
      {/* Trigger Button */}
      <Drawer.Trigger asChild>
        <Button className="bg-transparent text-(--accent) text-xl">
          <FaHamburger />
        </Button>
      </Drawer.Trigger>

      {/* Drawer */}
      <Drawer.Backdrop>
        <Drawer.Content placement="right" className="w-72">
          <Drawer.Dialog className="flex flex-col h-full">

            {/* Header */}
            <Drawer.Header className="border-b pb-4">
              <h2 className="text-lg font-semibold">Menu</h2>
            </Drawer.Header>

            {/* Body */}
            <Drawer.Body className="flex flex-col gap-4 py-6">
              <Link href="/" className="text-base hover:text-(--accent)">
                Home
              </Link>
              <Link href="/all-animals" className="text-base hover:text-(--accent)">
                All Animals
              </Link>
            </Drawer.Body>

            {/* Footer */}
            <Drawer.Footer className="mt-auto flex flex-col gap-3">
              <Button
                slot="close"
                className="w-full bg-(--accent) text-white"
              >
                Sign In
              </Button>
              <Button
                slot="close"
                className="w-full bg-(--accent) text-white"
              >
                Sign Up
              </Button>
            </Drawer.Footer>

          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}