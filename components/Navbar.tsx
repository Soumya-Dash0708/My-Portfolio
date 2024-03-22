import { navLinks } from "@/Data/Data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [navScroll, setNavScroll] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    function scrollActive() {
      setNavScroll(window.scrollY > 20);
    }
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  const isActive = (path: string) =>
    pathname === path ? "text-Orange" : "text-WhiteGray";

  return (
    <header
      className={`fixed left-0 top-0 z-20 w-full ${
        navScroll ? "bg-Glass backdrop-blur-sm" : ""
      }`}
    >
      <nav
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
          showMenu ? "hidden" : ""
        }`}
      >
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-WhiteGray text-3xl">
            Soumya Ranjan Dash
          </Link>
          <div className="hidden items-center justify-center space-x-4 md:flex">
            {navLinks.map((navLink) => (
              <Link
                key={navLink.path}
                href={navLink.path}
                className={`TextShadow text-lg font-medium uppercase ${isActive(
                  navLink.path
                )}`}
              >
                {navLink.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center md:hidden">
            <HiOutlineMenuAlt4
              className="text-White h-6 w-6 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>
      </nav>
      <motion.div
        className="bg-Black fixed right-0 top-0  rounded-full"
        animate={{ scale: showMenu ? 40 : 0 }}
        transition={{ type: "tween", duration: 0.5 }}
      ></motion.div>
      {showMenu && (
        <motion.nav
          // added bg-white class
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex justify-between bg-white">
            <div className="flex  flex-col   md:hidden">
              {navLinks.map((navLink) => (
                <Link
                  key={navLink.label}
                  href={navLink.path}
                  className={`block px-3 py-2 text-xl font-medium ${isActive(
                    navLink.path
                  )}`}
                  onClick={() => setShowMenu(false)}
                >
                  {navLink.label}
                </Link>
              ))}
            </div>
            <HiX
              className="text-White absolute right-8 top-3 h-6 w-6 cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          </div>
        </motion.nav>
      )}
    </header>
  );
}
