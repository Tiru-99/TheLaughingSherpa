'use client'

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  const navigationLinks = ["Link One", "Link Two", "Link Three", "Link Four", "Link Five"]
  
  return (
    <footer className="w-full py-8 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Top section with logo, nav links, and accreditation */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
          <div className="w-32">
            <Image
              src="/images/sherpa.png"
              alt="Company Logo"
              width={80}
              height={80}
              className="w-full"
            />
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            {navigationLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link}
              </Link>
            ))}
          </nav>
          
          <div className="w-32 h-12 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Accreditation</span>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        {/* Info sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Weekdays:</span> Timings
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Saturday, Sunday:</span> Timings
              </p>
            </div>
          </div>
          
          {/* Address */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <p className="text-gray-600">
              Level 1, 12 Sample St, Sydney NSW 2000
            </p>
          </div>
          
          {/* Contact */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Info@example.com</p>
              <p className="text-gray-600">(270) 555-0117</p>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Terms of Service
            </Link>
          </div>
          
          <p className="text-gray-600">©2024, All rights reserved.</p>
          
          <div className="flex gap-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

