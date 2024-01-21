"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

const NavBar = () => {
  return (
    <header className="block bg-gray-100 h-14 w-full">
      <div className="wrapper flex justify-between items-center mx-5 sm:mx-20 pt-3 pb-1 z-10">
        {/* <Image
          src="/assets/grad-ai-logo.png"
          width={50}
          height={50}
          alt="logo"
        /> */}
        <Link href="/">
          <div className="flex flex-row">
            <p className="text-xl font-extrabold text-gray-800">gradAI</p>
            <span className="text-xl font-extrabold text-sky-600">.</span>
          </div>
        </Link>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          {/* <SignedOut>
            <Button
              asChild
              className="bg-gray-200/80 hover:text-white rounded-full hover:bg-gray-950/80 text-gray-800 transition-all"
              size="lg"
            >
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut> */}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
