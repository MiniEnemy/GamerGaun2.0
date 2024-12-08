"use client"
import Image from 'next/image'
import Link from 'next/link'
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs"
import { LogIn } from 'lucide-react';

function NavBar() {
  const { userId } = useAuth();
  
  return(
    <div className='flex items-center justify-between'>
        <Image 
          src='/logo2.png'
          alt='logo'
          width={150}  
          height={70}  
          className='object-contain' 
          priority
        />
        
        {/* Navigation Links */}
        <div className='flex gap-5 ml-10 flex-1 font-serif text-xl'>
          <Link
            href="http://localhost:3000"
            className="text-white font-bold rounded-full px-3 py-2 cursor-pointer hover:bg-blue-700 hover:text-white transition duration-300 transform hover:-translate-y-1"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-white font-bold rounded-full px-3 py-2 cursor-pointer hover:bg-blue-700 hover:text-white transition duration-300 transform hover:-translate-y-1"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-white font-bold rounded-full px-3 py-2 cursor-pointer hover:bg-blue-700 hover:text-white transition duration-300 transform hover:-translate-y-1"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-white font-bold rounded-full px-3 py-2 cursor-pointer hover:bg-blue-700 hover:text-white transition duration-300 transform hover:-translate-y-1"
          >
            Contact Us
          </Link>
          <Link
            href="/privacy"
            className="text-white font-bold rounded-full px-3 py-2 cursor-pointer hover:bg-blue-700 hover:text-white transition duration-300 transform hover:-translate-y-1"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-white font-bold rounded-full px-3 py-2 cursor-pointer hover:bg-blue-700 hover:text-white transition duration-300 transform hover:-translate-y-1"
          >
            Terms & Conditions
          </Link>
        </div>

        {/* Conditional Rendering for Authentication */}
        <div className='flex items-center'>
          {!userId ? (
             <Link href="/sign-in">
             <button className="w-[50px] h-[30px] text-white ">
             <div>
      <LogIn size={24} color="white" />
    </div>
             </button>
           </Link>
          ) : (
            <div className='w-[40px] h-[40px]'>

            <UserButton />
            </div>
          )}
        </div>
    </div>
  )
}

export default NavBar;