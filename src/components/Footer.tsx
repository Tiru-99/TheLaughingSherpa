'use client'

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Separator } from "@/components/ui/separator"

export default function Footer() {
 
  
  return (
    <footer className="w-full py-8 px-4 md:px-6 lg:px-8" id="contact">
      <div className="container mx-auto">
        {/* Top section with logo, nav links, and accreditation */}
        <div className="flex flex-col items-center justify-between mb-8 gap-6">
          <div className="w-32">
            <Image
              src="/images/sherpa.png"
              alt="Company Logo"
              width={80}
              height={80}
              className="w-full"
            />
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
                <span className="font-medium">Sunday - Friday:</span> 9 AM - 5PM (GMT +5:45) 
              </p>
           
            </div>
          </div>
          
          {/* Address */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <p className="text-gray-600">
                Baluwatar, Kathmandu – 10 
            </p>
          </div>
          
          {/* Contact */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-600"> thelaughingshepra@gmail.com</p>
              <p className="text-gray-600"> +977 9802348524; +977 9802348523</p>
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
            <Link href="https://www.facebook.com/thelaughingsherpa" className="text-gray-600 hover:text-gray-900">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://www.instagram.com/thelaughingsherpa/" className="text-gray-600 hover:text-gray-900">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

