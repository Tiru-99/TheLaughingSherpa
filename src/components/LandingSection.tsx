"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LandingSection(){
    return(
        <>
            <main className="min-h-screen relative flex flex-col items-center overflow-hidden">
                {/* Background Image */}
                <motion.div 
                    className="absolute inset-0 z-0"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay:0.5 }}
                >
                    <Image
                        src="/images/mountains.png"
                        alt="Mountain landscape"
                        fill
                        className="object-cover"
                        quality={100}
                        sizes="100vw"
                        priority
                    />
                </motion.div>

                {/* Content Overlay */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
                    {/* Logo */}
                    <motion.div 
                        className="pt-8 pb-16"
                        initial={{ y: 300, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <Image
                            src="/images/sherpa.png"
                            alt="Sherpa Logo"
                            width={120}
                            height={120}
                            className="mx-auto"
                        />
                    </motion.div>

                    {/* Main Content */}
                    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                        <h1 className="flex flex-col items-center gap-4 lg:mb-32">
                            <motion.span 
                                className="text-2xl md:text-4xl font-light text-transparent bg-black bg-clip-text"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                FUEL YOUR
                            </motion.span>
                            <motion.span
                                className="text-[55px] md:text-[170px] font-bold text-transparent bg-clip-text bg-black bg-opacity-70 tracking-widest"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 150, // Controls the bounciness (higher = more stiff, lower = more bouncy)
                                  damping: 10,    // Controls how fast it settles (lower = more oscillations)
                                  delay: 2,     // Delay before the animation starts
                                }}
                              >
                                ADVENTURE
                              </motion.span>

                        </h1>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <Link
                                href="#"
                                className="mt-8 md:-mt-24 inline-flex items-center gap-2 bg-[#FFB800] text-black px-6 py-3 rounded-full font-medium hover:bg-[#FFA500] transition-colors tracking-widest"
                            >
                                FUEL YOUR ADVENTURE
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </main>
        </>
    )
}

