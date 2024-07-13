'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Highlight } from "@/components/ui/hero-highlight";
import { ContainerScroll } from "@/components/ui/container-scroll-animations";
import Image from "next/image";
import Section from '@/components/Section' 
import Footer from '@/components/Footer'
export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100vh] bg-[#F5F5F5] relative overflow-hidden">
      <header>     
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              <Image src="/logo-dark-removebg-preview.png" className="w-[10em] h-[10em]" alt="logo" width={1000} height={1000} /> 
          </Link>
      </header>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
        <div className="w-[750px] h-[750px] rounded-full bg-[#4c46a5] opacity-30 blur-[75px] mr-[-150px]" />
        <div className="w-[750px] h-[400px] rounded-full bg-[#ee2afc] opacity-30 blur-[75px]" />
      </div>
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-24 lg:py-32 xl:py-48 text-center">
        <div className="max-w-md space-y-4">
        <h1 className="text-6xl font-bold tracking-tighter">
        Get curated recipes on the   <br /> 
            <Highlight className="text-black dark:text-white m-1 ">
            <i> fly </i>
          </Highlight>
        </h1>
          <p className="text-muted-foreground md:text-xl z-20">
            Get personalized recipes based on what you’re feeling, what’s in your fridge, what kind of diet you’re on or really anything that you need. 
          </p>
          <form className="flex gap-2 w-full z-50 flex-col">
            <Button type="submit" className="hover:bg-[#4c46a5] border-2 border-[#4c46a5] hover:border-[#4c46a5] hover:text-[#ffffff] z-50"> 
              <a href="https://tally.so/r/m6x1pk">  
                Join Waitlist 
              </a>
            </Button>   
          </form>
        </div>
      </main>
      <Section />
      <Footer />
    </div>
  )
}
