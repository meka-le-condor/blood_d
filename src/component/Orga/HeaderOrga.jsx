import React, { useState }  from 'react'
import {FaArrowCircleDown} from 'react-icons/fa';
function HeaderOrga () {

    return (
      <div>
        
        <header class=" mb-4 bg-[#46052D] flex items-center w-full  justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
                    <nav class="hidden  px-8 gap-12 md:flex">
                    <a href="/orga" class="text-lg text-white font-semibold0 hover:text-black hover:scale-75  hover:animate-fade-up ">Home</a>                 
                    <a href="/listdonor" class="text-lg font-semibold text-white transition duration-1000 hover:text-black hover:scale-75  hover:animate-fade-up active:text-[#46052D]">List_Donor</a>
                    <a href="/bank" class="text-lg font-semibold text-white transition duration-1000 hover:text-black hover:scale-75  hover:animate-fade-up active:text-[#46052D]">Bank of blood</a>

                   
                    </nav>
            
               <a href="/">
               <button  class="  rounded-full bg-white px-8 py-3 text-center text-sm font-semibold text-black outline-none ring-[#46052D] transition duration-100 hover:bg-[#1e0e18] hover:text-white focus-visible:ring active:text-black-700 md:text-base lg:inline-block" >
                    <FaArrowCircleDown/> 
                </button>
                </a>
               
          </header>

      </div>
    )
  
}

export default HeaderOrga