"use client";

import React, { useState, useEffect } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";

const TopButton = () => {
  // スクロールしたら表示させる
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // もしもウインドウの高さが上から300px以上になると表示させる
      if (window.scrollY > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }
    window.addEventListener("scroll", handleScroll)
    // スクロールが終ったときにイベントもremoveさせる
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  return (
    <div
      className={
        // 三項演算子でscrollingがtrueの場合はfixedで固定して
        scrolling ? "fixed bottom-[0.5rem] right-[0.7rem] z-50" : "hidden"
      }
    >
      <a href="#home">
        <BsArrowUpSquareFill className="text-cadetblue shadow-md" size={40} />
      </a>
    </div>
  );
};

export default TopButton;
