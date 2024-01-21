"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center flex-col gap-8">
      <div className="bg-gray-100 w-full flex items-center justify-center gap-5">
        <motion.div
          initial={{ x: 25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 0.8,
          }}
          className="w-full flex flex-row items-end justify-end"
        >
          <p className="text-4xl font-extrabold text-gray-800">gradAI</p>
          <span className="text-4xl font-extrabold text-sky-600">.</span>
        </motion.div>

        <motion.div className="h-[200px] block min-h-[1em] w-px bg-gradient-to-tr from-transparent via-gray-900 to-transparent opacity-20 dark:opacity-100"></motion.div>

        <motion.div
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            delay: 0.3,
            duration: 0.8,
          }}
          className="w-full"
        >
          <p className="text-2xl text-gray-800 font-semibold">Let's grow</p>
          <p className="text-3xl text-sky-600 font-semibold">Together</p>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        className="px-5 md:px-0 w-full flex items-center justify-center flex-col gap-2"
      >
        <Button
          asChild
          className="w-full rounded-lg md:w-1/2 lg:w-1/4 bg-gray-800 text-gray-100"
        >
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button
          asChild
          className="w-full rounded-lg md:w-1/2 lg:w-1/4 bg-sky-600 text-gray-100 hover:bg-sky-600"
        >
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
