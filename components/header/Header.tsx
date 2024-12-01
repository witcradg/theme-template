"use client"
import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

// import { ModeToggle } from "../mode-toggle";
// import Register from "@/components/Register";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="h-15 px-20 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              rel="noreferrer noopener"
              href="/"
              className="ml-2 my-2 font-bold text-xl flex"
            >
              LOGO PLACHOLDER
              {/* <Image
                src="/layout/redeyerasta.png"
                width={100}
                height={100}
                alt="Logo"
                style={{ width: 'auto', height: 'auto' }}
              /> */}
            </Link>
          </NavigationMenuItem>

          <MobileMenu />

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            <Navbar />
          </nav>

          <div className="hidden md:flex gap-4">
            RIGHT CONTENT
            {/* <Register /> */}
            {/* <ModeToggle /> */}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header >
  );
};
