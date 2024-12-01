'use client'
import {Link} from 'react-scroll'
import { useState } from 'react'
import Link2 from 'next/link'

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed md:top-0 md:right-0 text-center p-4 z-50">
      {/* Hamburger Menu Button for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:space-x-6 font-sans text-lg`}
      >
        <li>
          <Link2
            href="/"
            className="block text-gray-700 hover:text-gray-900 transition-colors duration-200 ease-in-out cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link2>
        </li>
        <li>
          <Link
            to="contact"
            duration={1000}
            smooth={true}
            className="block text-gray-700 hover:text-gray-900 transition-colors duration-200 ease-in-out cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Contact Us 
          </Link>
        </li>
      </ul>
    </nav>
  )
}
