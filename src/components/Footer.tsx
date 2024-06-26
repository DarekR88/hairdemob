"use client";

import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="border-black relative bottom-0 flex flex-col-reverse justify-center items-center w-screen py-6 lg:flex-row lg:px-32 lg:justify-between lg:h-24">
        <p>
          <span>&copy;</span> 2023 Darek Radke
        </p>
        <Link href={"/"} className="font-Anton text-2xl">
          <h1 className="text-button-primary text-4xl">Good Look</h1>Men's Barber
        </Link>
        <Link href={"/contact"} className="text-xl">
          Look Good
        </Link>
      </div>
    </>
  );
}
