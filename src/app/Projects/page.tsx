import React from 'react' 
import Image from 'next/image'

export default function Projects() {
  return (
    <div className='w-full text-center mt-8 px-4'>
         <span className='text-2xl'>My Projects</span>
        <div className='flex items-center md:flex-row md:gap-12 justify-center gap-12 mt-8 ml-20 mr-20'>
           
            <div className=' rounded-xl text-center hover:scale-110 border transation-transform duration-300  sm:w-150 border-blue-400'>
                <Image className='w-150 rounded-xl' src="/store-app.png" width={800} height={800} alt={''}/>
                <span>Atlas Store</span>
            </div>
              <div className=' rounded-xl text-center hover:scale-110 border transation-transform duration-300  sm:w-150 border-green-400'>
                <Image className='w-150 pb-5 rounded-xl' src="/todoapp.PNG" width={800} height={800} alt={''}/>
                <span>Todo List</span>
            </div>
        </div>
    </div>
  )
}
