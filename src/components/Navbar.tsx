'use client'
import React from 'react'
import Image from "next/image";
import { User } from 'lucide-react';
import Link from 'next/link';


export default function Navbar() {
  return (
    
<div className='w-full items-center justify-between'>


    <nav className='w-full bg-gray-800 items-center justify-between flex'>
     
      <Link className='ml-10' href="/"><Image className='w-25 text-2xl font-bold text-green-600 cursor-pointer h-22'  src={'/ehsan-img.png'} alt={''} width={2000} height={2000}/></Link> 
        <ul className='flex gap-8 text-gray-700  font-medium'>
            <li className="hover:text-pink-200 hover:scale-120 text-white cursor-pointer transition" ><Link href="/">Home</Link></li>
            <li className="hover:text-pink-200 hover:scale-120 text-white cursor-pointer transition" ><Link href="/Services">Services</Link></li>
            <li className="hover:text-pink-200 hover:scale-120 text-white cursor-pointer transition" ><Link href="/">Projects</Link></li>
            <li className="hover:text-pink-200 hover:scale-120 text-white cursor-pointer transition" ><Link href="/about">About</Link></li>
            <li className="hover:text-pink-200 hover:scale-120 text-white cursor-pointer transition" ><Link href="/Contact">Contact</Link></li>
        </ul>

       
        <Link className='mr-15 text-white' href="/"><User /></Link>
        
    </nav>











</div>

  )
}
