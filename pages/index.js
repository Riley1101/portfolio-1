import "@fontsource/inter";
import Button from "../components/button";
import Card from "../components/card";
import Navbar from "../components/navbar";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/footer";
export default function Home() {

  return (
    <div>
      <div className=" w-10/12 lg:w-1/2 2xl:w-2/5 m-auto">
        <Navbar/>
        {/* info: hero section */}
        <div className=" pt-28 py-6 2xl:pt-32 2xl:py-14">
          <h2 className=" text-6xl leading-[72px] lg:text-7xl lg:leading-[86px]">A Talented Frontend Developer <span className=" hidden lg:inline text-lg lg:pt-4 font-medium">you are looking for</span></h2>
          <div className="text-indigo-600 text-sm flex gap-2 pt-3">
            <div><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg></div>
            3 years working experiment</div>
          <p className="mt-5">Hi there, I&apos;m <h1 className="inline">MayThanHsu</h1>, a frontend developer who&apos;s really swift at learning and loves to code.</p>
          <Button>See My Works</Button>
        
        </div>
        {/* info:projects */}
        <div className=" pt-12 pb-24">
            <h2 className=" text-3xl">Featured Projects</h2>
            <div className="mt-5 grid gap-3 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
              <Card project={'https://github.com/maythanhsuaung0-0/social-website'} pj_name={'Social Website'} pj_note={'my testing social website'} lan={'Javascript'}/>
            </div>
        </div>
       
        
      </div>
       {/* info:contact me */}
      <div className=" bg-gray-700 text-white" id="contact">
      <div className="w-10/12 lg:w-1/2 m-auto ">
         <div className="py-6 grid place-items-center">
              <div className=" w-full lg:w-3/4">
           <fieldset className=" text-white shadow-md border border-solid border-white px-3 py-2 text-[15px] rounded-lg">
             <legend className="font-medium">Message me right away!</legend>
             <form className="grid gap-2">
               <div><label htmlFor="name">Name</label>
               <input className=" w-full px-2 py-1 border border-solid border-white bg-transparent focus:outline-none rounded-sm" type={'text'} id='name'/></div>
               <div><label htmlFor="email">Email Address</label>
               <input className=" w-full px-2 py-1 border border-solid border-white bg-transparent focus:outline-none rounded-sm" type={'text'} id='email'/></div>
               <div><label htmlFor="message">Message</label>
               <textarea className="w-full border border-solid border-white bg-transparent focus:outline-none rounded-sm" rows={4} type={'text'} id='message'/></div>
             </form>
             <button className="mt-2 px-7 py-2 text-base  font-semibold border border-white bg-transparent text-white w-fit rounded-sm">Send Message</button>
           </fieldset>
         </div>
         </div>
        <Footer/>
        </div>
      </div>
    </div>
  )
}
