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

         <div className="flex flex-col bg-blue-200 w-full gap-5 items-center h-full">
            <div>
               <Link href={'/pages/notes'}>
                  Notes
               </Link>
            </div>
            
            <div>
               <Link href={'/pages/todos'}>
                  Todos
               </Link>
            </div>
         </div>
      </div>
   )
}

export default sidenav