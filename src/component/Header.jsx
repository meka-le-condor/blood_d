
import React from 'react'
import "../App.css"
function Header (){
 

    return (
      <div>


          <header class=" top-0 left-0   z-50 transition-transform duration-300 transform translate-y-0 mb-8 bg-[#46052D] flex items-center w-full  justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
                    <nav class="hidden  px-8 gap-12 md:flex">
                    <a href="/" class="text-lg text-white font-semibold0 hover:text-black hover:scale-75  hover:animate-fade-up ">Home</a>
                    <a href="/about" class="text-lg font-semibold text-white transition duration-1000 hover:text-black hover:scale-75  hover:animate-fade-up active:text-[#46052D]">About us</a>
                    <a href="/register" class="text-lg font-semibold text-white transition duration-1000 hover:text-black hover:scale-75  hover:animate-fade-up active:text-[#46052D]">Register_donor</a>
                    <a href="/registerO" class="text-lg font-semibold text-white transition duration-1000 hover:text-black hover:scale-75  hover:animate-fade-up active:text-[#46052D]">Register_Organization</a>

                   
                    </nav>
                <a href="/login" class="mr-5 rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-black outline-none ring-[#46052D] transition duration-100 hover:bg-[#1e0e18] hover:text-white focus-visible:ring active:text-black-700 md:text-base lg:inline-block">Login</a>

               
          </header>



      </div>
    )

}
export default Header ;