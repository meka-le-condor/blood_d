
import React from 'react'
import "../App.css"
function Header (){
 


    return (
      <div>


        <header class="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
                    <nav class="hidden gap-12 lg:flex">
                    <a href="/" class="text-lg font-semibold text-[#46052D]">Home</a>
                    <a href="/about" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-[#46052D] active:text-[#46052D]">About us</a>
                    <a href="/register" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-[#46052D] active:text-[#46052D]">Register_donor</a>
                    <a href="/findblood" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-[#46052D] active:text-[#46052D]">FindBlood</a>
                    </nav>
                <a href="/login" class="hidden rounded-lg bg-black px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-[#46052D] transition duration-100 hover:bg-[#46052D] hover:text-white focus-visible:ring active:text-black-700 md:text-base lg:inline-block">Login</a>

                <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-white ring-[#46052D] hover:bg-[#46052D] focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>

                Menu
                </button>
          </header>



      </div>
    )

}
export default Header ;