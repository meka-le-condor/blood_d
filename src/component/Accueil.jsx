import React from 'react'
import "../App.css"
import Header from './Header.jsx';
function Accueil () {

    return (
      <><Header/>
     <div class="app bg-white pb-6 sm:pb-8 lg:pb-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

          {/* section menu */} 
            <section class="flex mb-4 flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      
                <div class=" transition-transform duration-500 transform hover:translate-x-2 flex mb-8 flex-col ml-56 justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                  <p class=" animate-bounce mb-4 font-bold  text-[#46052D] md:mb-6 md:text-lg xl:text-3xl">Bienvenue dans Blood_d</p>

                  <h1 class="animate-fade-up animate-once animate-duration-[1200ms] animate-delay-1000 mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">Aidez Nous à aider</h1>

                  <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.</p>

                  <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                    <a href="/register" class="inline-block rounded-lg bg-[#46052D] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-[#46052D] transition duration-100 hover:bg-black focus-visible:ring active:bg-[#46052D] md:text-base">Start now</a>

                    <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-[#46052D] transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a> 
                  </div>
                </div>
              
            </section>
            
            {/*section stat */}
              <div class=" bg-[#3b0b2352] mb-56 py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">

                  <div class="mb-10 md:mb-16">
                    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Statistiques</h2>

                    <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                  </div>


                  <div class="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
                  
                    <div class="flex flex-col items-center md:p-4">
                      <div class="text-xl font-bold text-[#46052D] sm:text-2xl md:text-3xl">200</div>
                      <div class="text-sm font-semibold sm:text-base">People</div>
                    </div>
                

                  
                    <div class="flex flex-col items-center md:p-4">
                      <div class="text-xl font-bold text-[#46052D] sm:text-2xl md:text-3xl">500+</div>
                      <div class="text-sm font-semibold sm:text-base">People</div>
                    </div>

                    <div class="flex flex-col items-center md:p-4">
                      <div class="text-xl font-bold text-[#46052D] sm:text-2xl md:text-3xl">1000+</div>
                      <div class="text-sm font-semibold sm:text-base">Donors</div>
                    </div>
                  
                  
                    <div class="flex flex-col items-center md:p-4">
                      <div class="text-xl font-bold text-[#46052D] sm:text-2xl md:text-3xl">1500+</div>
                      <div class="text-sm font-semibold sm:text-base">Blood Bank</div>
                    </div>
                  
                  </div>
                </div>
              </div>
            {/*section temoingnage*/}
              <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                  <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Temoignages</h2>

                  <div class="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
                
                    <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                      <div class="text-center text-gray-600">“This is a section of some simple filler text, also known as placeholder text.”</div>

                      <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                        <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                          <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
                        </div>

                        <div>
                          <div class="text-center text-sm font-bold text-[#46052D] sm:text-left md:text-base"> Mr John McCulling</div>
                          <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">Doctor / fann</p>
                        </div>
                      </div>
                    </div>
                

                
                    <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                      <div class="text-center text-gray-600">“This is a section of some simple filler text, also known as placeholder text.”</div>

                      <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                        <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                          <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by christian ferrer" class="h-full w-full object-cover object-center" />
                        </div>

                        <div>
                          <div class="text-center text-sm font-bold text-[#46052D] sm:text-left md:text-base">M Kate Berg</div>
                          <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">Doctor/Principal</p>
                        </div>
                      </div>
                    </div>
                

                
                    <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                      <div class="text-center text-gray-600">“This is a section of some simple filler text, also known as placeholder text.”</div>

                      <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                        <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                          <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500" loading="lazy" alt="Photo by Ayo Ogunseinde" class="h-full w-full object-cover object-center" />
                        </div>

                        <div>
                          <div class="text-center text-sm font-bold text-[#46052D] sm:text-left md:text-base">Mr Greg Jackson</div>
                          <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">Infirmier / Fann</p>
                        </div>
                      </div>
                    </div>
                
                  </div>
                </div>
              </div>
              {/*section newlestter*/}
              <div class="bg-white py-6 mb-24 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                  <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8">
                    <div class="mb-4 sm:mb-8">
                      <h2 class="text-center text-xl font-bold text-[#46052D] sm:text-2xl lg:text-3xl">Get the latest updates</h2>
                      <p class="text-center text-gray-500">Sign up for our newsletter</p>
                    </div>

                    <form class="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
                      <input placeholder="Email" class="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-red-300 transition duration-100 focus:ring" />

                      <button class="inline-block rounded bg-[#46052D] px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-[#46052D] transition duration-100 hover:bg-black focus-visible:ring active:bg-[#46052D] md:text-base">Send</button>
                    </form>

                    <p class="text-center text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-[#46052D] active:text-indigo-600">Term of Service</a> and <a href="#" class="underline transition duration-100 hover:text-[#46052D] active:text-indigo-600">Privacy Policy</a>.</p>
                  </div>
                </div>
              </div>
              {/*section footeer*/}
              <div class="bg-white pt-4 sm:pt-10 lg:pt-12">
              <footer class="mx-auto max-w-screen-2xl px-4 md:px-8 bg-black">
                <div class="flex flex-col items-center  justify-between gap-4 border-t border-b py-6 md:flex-row">
            
                  <nav class="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
                    <a href="#" class="text-gray-500 transition duration-100 hover:text-white active:text-indigo-600">About</a>
                    <a href="#" class="text-gray-500 transition duration-100 hover:text-white active:text-indigo-600">Investor Relations</a>
                    <a href="#" class="text-gray-500 transition duration-100 hover:text-white active:text-indigo-600">Jobs</a>
                    <a href="#" class="text-gray-500 transition duration-100 hover:text-white active:text-indigo-600">Press</a>
                    <a href="#" class="text-gray-500 transition duration-100 hover:text-white active:text-indigo-600">Blog</a>
                  </nav>
                
                  <div class="flex gap-4">
                    <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-white active:text-gray-600">
                      <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-white active:text-gray-600">
                      <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>

                    <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-white active:text-gray-600">
                      <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>

                    <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-white active:text-gray-600">
                      <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
              
                </div>

                <div class="py-8 text-center text-sm text-gray-400">© 2024 - Present Groupe3. All rights reserved.</div>
              </footer>
              </div>
        </div>
      </div>
      </>
    )
  
}

export default Accueil  