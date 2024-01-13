"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isSigning, setIsSigning] = useState(false);

  return (
    <header className="bg-slate-900 h-14 w-full">
      <div className="wrapper flex justify-between items-center mx-4 pt-1 pb-1">
        <Image
          src="/assets/grad-ai-logo.png"
          width={50}
          height={50}
          alt="logo"
        />
        <h1 className="text-gray-200 font-semibold">grad.ai</h1>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button
              asChild
              className="hover:bg-white/80 hover:text-slate-900 rounded-lg bg-slate-900 text-gray-300 transition-all"
              size="sm"
            >
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
