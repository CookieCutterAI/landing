'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Highlight } from "./ui/hero-highlight";
import { ContainerScroll } from "./ui/container-scroll-animations";
import Image from "next/image";
import React from 'react'

const Section = () => {
  return (
    <div>

      <section className="h-[100vh] flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-24 lg:py-32 xl:py-48 text-center"> 
        <h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "> 
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                   CookieCutter will reccomend the perfect recipe <br /> 
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                   based on <i> <u> you </u>  </i>
                  </span>
                </h1>
              </>
            }
          >
            {/*<Image
              src={`/linear.webp`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />*/}
          </ContainerScroll>
          <div className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
                Stop mindlessly scrolling  <br />
          </div>



        </h1>
      </section>

    </div>
  )
}

export default Section
