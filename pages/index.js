import "@fontsource/inter";
import Button from "../components/button";
import Card from "../components/card";
import Navbar from "../components/navbar";
import Image from "next/image";
import { useState } from "react";
export default function Home() {

  return (
    <div>
      <div className=" w-10/12 lg:w-1/2 m-auto">
        <Navbar/>
        {/* info: hero section */}
        <div className=" pt-28 py-6 2xl:py-14">
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
        <div className=" p-5 grid gap-2">
        <div className="flex gap-3 justify-center">
              <div>           
                  <a href="tel:+959-792-758-857">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                 </a>
              </div>
              <div>
                  <a href="mailto:maythanhsuaung1111@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </a>
              </div>
              
              <div>
                <a href="https://github.com/maythanhsuaung0-0">
                <svg width="20px" height="20px" className="h-6 w-6 " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"/></svg>
                </a>
              </div>
              <div>
                 <a href="https://www.facebook.com/jane.peterson.182940">
                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="48" height="48"
                  viewBox="0 0 48 48" className="w-6 h-6"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path></svg>
                 </a>
              </div>
              <div>
                <a href="https://www.fiverr.com/annette404">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      width="48" height="48"
                      viewBox="0 0 48 48" className="h-6 w-6"><circle cx="24" cy="24" r="20" fill="#66bb6a"></circle><path fill="#fff" d="M35.066,22.035v-0.959h-1.821l-0.8-0.014c-0.684,0-1.151,0.45-1.335,0.974v-0.959h-2.039V27.3 h2.039v-1.334v-2.066c0-0.62,0.503-1.123,1.123-1.123h0.795v4.523h2.039v-1.334v-2.066c0-0.62,0.503-1.123,1.123-1.123h1.012v-1.7 l-0.8-0.014C35.718,21.061,35.25,21.512,35.066,22.035z M20.56,21.206l-1.094,3.597l-1.093-3.597h-2.039l2.215,6.223h0.12h1.597 h0.12l2.213-6.223H20.56z M12.23,21.206v-0.415c0-0.364,0.294-0.658,0.658-0.658h1.287v-1.706h-1.767 c-1.223,0-2.216,0.991-2.216,2.216v0.564H9v1.649h1.192v4.572h2.039v-4.572h1.944v4.572h2.039v-4.572v-1.649h-2.039H12.23V21.206z M25.424,21.122h-0.248c-1.67,0-3.024,1.354-3.024,3.024v0.342c0,1.67,1.354,3.024,3.024,3.024h0.552 c1.143,0,2.122-0.706,2.524-1.705l-1.798-0.525c0,0-0.215,0.616-0.965,0.616c-0.847,0-1.295-0.463-1.354-0.989l0,0v-0.003 c-0.004-0.038-0.006-0.077-0.006-0.115h2.3h2.022v-0.643C28.448,22.476,27.094,21.122,25.424,21.122z M24.13,23.59 c0.025-0.559,0.485-1.006,1.051-1.006h0.194c0.565,0,1.026,0.446,1.051,1.006H24.13z"></path><circle cx="38.852" cy="26.305" r="1.268" fill="#263238"></circle></svg>
                </a>
              </div>
              </div>
         <div className="text-center">Copyright © 2022 maythanhsu</div>
         <div className="text-center text-sm">may.dev</div>
        </div>
        </div>
      </div>
    </div>
  )
}
