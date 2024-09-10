import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const sidenav = () => {
   return (
      <div className="flex md:flex-col md:p-5 h-full gap-5 shadow-xl">
         <div className="flex justify-center">
            <Image 
               src='/vercel.svg' 
               alt='logo' 
               width={100}
               height={24}
               priority
            />
         </div>

         <div className="flex flex-col w-full gap-5 items-center h-full">
            <Link href={'/'} className="border border-black rounded-xl w-full text-center p-3 hover:bg-slate-200 active:bg-slate-200 shadow">
               <div >
                  <span className='font-bold'>
                     Overview
                  </span>
               </div>
            </Link>

            <Link href={'/pages/todos'} className="border border-black rounded-xl w-full text-center p-3 hover:bg-slate-200 active:bg-slate-200 shadow">
               <div >
                  <span className='font-bold'>
                     Todos
                  </span>
               </div>
            </Link>

            <Link href={'/pages/notes'} className="border border-black rounded-xl w-full text-center p-3 hover:bg-slate-200 active:bg-slate-200 shadow">
               <div>
                  <span className='font-bold'>
                     Notes
                  </span>
               </div>
            </Link>

            
            
         </div>
      </div>
   )
}

export default sidenav