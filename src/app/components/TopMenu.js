"use client";

import React from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useMenuStore } from "@/app/store/useMenuStore";

const TopMenu = () => {
  const { isOpen, openMobileMenu } = useMenuStore();

  return (
    <section
      className="px-[40px] bg-whitesmoke py-4 z-10 max-xs:px-5"
      id="home"
    >
      <div
        className="max-w-7xl mx-auto flex flex-col justify-between items-center
        gap-5
       "
      >
        {/* 上 */}
        <div className="flex justify-between items-center w-full md:hidden">
          <Link href={"/"}>
            <h1 className="font-bold text-3xl text-cadetblue">ORIGIN.Doc</h1>
          </Link>
          {/* トグル */}
          {/* 三項演算子でmenuボタンを切り替える実装 */}
          <div className="text-2xl z-50" onClick={openMobileMenu}>
            {isOpen ? <AiOutlineClose /> : <RiMenu3Fill />}
          </div>
        </div>

        {/* 下 */}
        <div
          className="flex justify-between w-full items-center
           max-xs:flex-col max-xs:items-start max-xs:gap-2"
        >
          <div className="flex flex-row gap-2 items-center text-lg font-bold">
            <MdEmail />
            <span className="text-darkblue text-xl pb-1">
              original@email.com
            </span>
          </div>
          <button
            className="bg-darkblue text-white px-4 py-1 rounded-md
           hover:bg-darkblue/75"
          >
            資料ダウンロード
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopMenu;
