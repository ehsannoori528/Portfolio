'use client'
import React from 'react'
import Image from "next/image";
import { User } from 'lucide-react';


export default function Navbar() {
  return (
    
<div className='w-full items-center justify-between'>


    <nav className='w-full bg-gray-800 items-center justify-between flex'>
     
      <a className='ml-10' href="/"><Image className='w-25 text-2xl font-bold text-green-600 cursor-pointer h-22'  src={'/ehsan-img.png'} alt={''} width={2000} height={2000}/></a> 
        <ul className='flex gap-8 text-gray-700  font-medium'>
            <li className="hover:text-pink-200 hover:scale-120 text-white cursor-pointer transition" ><a href="/">Home</a></li>
            <li className="hover:text-pink-200 hover:scale-120 text-white cursor-pointer transition" ><a href="/Services">Services</a></li>
            <li className="hover:text-pink-200 hover:scale-120 text-white cursor-pointer transition" ><a href="/">Projects</a></li>
            <li className="hover:text-pink-200 hover:scale-120 text-white cursor-pointer transition" ><a href="/about">About</a></li>
            <li className="hover:text-pink-200 hover:scale-120 text-white cursor-pointer transition" ><a href="/Contact">Contact</a></li>
        </ul>

       
        <a className='mr-15 text-white' href="/"><User /></a>
        
    </nav>











</div>

  )
}
