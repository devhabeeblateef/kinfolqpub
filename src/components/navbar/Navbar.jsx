import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <main className="h-[78px] pt-[20px]">
        <div className="hidden md:flex justify-between items-center px-16 ">
          <h1 className="text-[28px]">kinfolq</h1>
          <div className="flex justify-between items-center space-x-5 text-[18px]">
            <ul className="flex justify-between items-center space-x-5 border-r px-3">
              <Link href="/" className="cursor-pointer">
                Home
              </Link>
              <Link href="/agenda" className="cursor-pointer">
                Agenda
              </Link>
              <Link href="/sponsor" className="cursor-pointer">
                Become a sponsor
              </Link>
            </ul>
            <Link href="/buy-ticket">
              <button className="border border-[#6D381C] bg-[#6D381C] py-1 px-[16px] rounded-lg">
                Buy tickets
              </button>
            </Link>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="flex justify-between items-center px-12">
            <h1 className="text-[28px]">kinfolq</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </div>
        </div>
        <hr className="opacity-50 mt-2" />
      </main>
    </>
  );
};

export default Navbar;
