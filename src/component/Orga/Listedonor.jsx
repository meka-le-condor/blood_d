import React, { useState } from 'react'
import HeaderOrga from './HeaderOrga'
import axios from 'axios'

function Listedonor()  {
    const  [datad,setData]=useState([]);
    axios.get('http://localhost:4002/api/get/donor')
        .then(reponse=>{
        setData(reponse.data)
    })
    .catch(error=>{
        
    })

    

    return (
        
    <div><HeaderOrga/>
        
        <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      
             <img className='acceuil' class="acceuil absolute inset-0 h-full w-full object-cover object-center" />
 

 
        <div class="absolute inset-0 bg-gray-400 mix-blend-multiply"></div>
      

      
      <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p class="mb-4 text-center text-lg text-[#46052D] sm:text-xl md:mb-8">Aidez nous a aider</p>
        <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Liste des Donneurs Pour cet oraganisation</h1>

            <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                {
                datad.map(function(item){
                    return(
                        <div class="relative bg-gray-900 block p-6 border border-gray-100 rounded-lg max-w-sm mx-auto mt-24" >
                
                        <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#6e3f5c] via-[#46052D] to-[#9c768d]"></span>

                        <div class="my-4">
                            <h2 class="text-white text-2xl font-bold pb-2">{item.firstName}_{item.lastName} </h2>
                            <p class="text-gray-300 py-1">Groupe sangain : {item.groupe}</p>
                        </div>

                        <div class="flex justify-end">
                            <button class="px-2 py-1 text-white border border-gray-200 font-semibold rounded hover:bg-gray-800">Detail</button>
                        </div>
                    </div>
                
                    );
                })}
               
            </div>
        </div>
        
     
    </section>
        
        </div>
    )
  
}

export default Listedonor