"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Logo } from "../../../components/Logo";
import { MenuIcon, XIcon } from "lucide-react";

import logo from "../../../public/icons/Vector.png";
import { Button } from "@repo/ui/components/ui/button";

const navigation = [
  { name: "Features", href: "/#features" },
  { name: "Testimonial", href: "/#testimonial", target: "_blank" as const },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-50 w-full max-w-7xl rounded-xl  ${isScrolled ? "fixed top-0 bg-white shadow-md" : ""}`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8 w-full"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="flex items-center justify-center gap-2">
              <Image src={logo} alt="Elevate logo" className="h-8 w-auto" />
              <Logo className="h-7 w-auto mb-2" />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 border rounded-xl px-4 py-3 bg-secondary-bg font-sans">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.target}
              prefetch={item.target !== "_blank"}
              className="text-sm font-semibold leading-6 hover:text-black hover:underline hover:scale-105 font-sans"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center space-x-6">
          <Link
            href="/welcome"
            className="text-xl font-semibold leading-6 text-gray-900 underline underline-offset-8 font-sans"
          >
            Log in
          </Link>
          <Button className="rounded-sm px-4 py-5" size="lg">
            <Link
              href="/welcome"
              className="text-xl font-semibold leading-6 text-white font-sans"
            >
              sign up
            </Link>
          </Button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <div className="flex items-center justify-center gap-2">
                  <Image src={logo} alt="Elevate logo" className="h-8 w-auto" />
                  <Logo className="h-8 w-auto mb-3" />
                </div>
              </Link>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex gap-10 py-6">
                <Link
                  href="/welcome"
                  className="border -mx-3 block rounded-sm px-3 py-2.5 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50 bg-secondary-bg w-[100px]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  Log in
                </Link>
                <Link
                  href="/welcome"
                  className="-mx-3 block rounded-sm px-3 py-2.5 text-xl font-semibold leading-7 text-white bg-primary border w-[100px]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
