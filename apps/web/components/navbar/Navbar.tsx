"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  UserButton,
  useUser
} from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        fixed top-0 left-0 right-0 z-50
        bg-black/40 backdrop-blur-2xl
        border-b border-white/10
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-6 py-5
          flex items-center justify-between
        "
      >
        {/* LOGO */}
        <Link
          href="/"
          className="
            text-2xl font-black
            bg-gradient-to-r
            from-cyan-400
            via-indigo-400
            to-purple-500
            bg-clip-text text-transparent
          "
        >
          ConvertSphere
        </Link>

        {/* NAV LINKS */}
        <div className="
          hidden md:flex
          items-center gap-8
          text-zinc-300
          text-sm
        ">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <Link href="/dashboard" className="hover:text-white transition">
            Dashboard
          </Link>

          <Link href="/pricing" className="hover:text-white transition">
            Pricing
          </Link>
        </div>

        {/* AUTH */}
        <div className="flex items-center gap-4">
          {!isSignedIn ? (
            <>
              <Link
                href="/sign-in"
                className="
                  px-4 py-2 rounded-xl
                  border border-white/10
                  hover:border-white/20
                  transition
                "
              >
                Sign In
              </Link>

              <Link
                href="/sign-up"
                className="
                  px-5 py-2 rounded-xl
                  bg-indigo-600
                  hover:bg-indigo-500
                  transition
                "
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm text-zinc-400">
                Logged In
              </span>

              <UserButton />
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
}