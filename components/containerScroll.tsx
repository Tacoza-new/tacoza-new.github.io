"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/containerScrollAnimation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black">
              Easy.Faster.Beautiful <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Point of Sale
              </span>
            </h1>
          </>
        }
      >
        {/* <img
          src="https://cdn.dribbble.com/users/428452/screenshots/5675370/okcanimationn800.gif"
          alt="hero"
          height={711}
          width={1248}
          className="mx-auto rounded-xl object-cover h-full object-left-top"
          draggable={false}
        /> */}
        <video
          width="1248"
          height="711"
          preload="none"
          className="mx-auto rounded-xl object-cover h-full object-left-top"
          autoPlay
          muted
          loop
        >
          <source src="/pos.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </ContainerScroll>
    </div>
  );
}
