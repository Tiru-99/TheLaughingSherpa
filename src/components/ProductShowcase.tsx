"use client"
import { motion, useMotionValue } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Mushroom Coconut Curry",
    price: 45.46,
    image: "/images/mushroom.jpg"
  },
  {
    id: 2,
    name: "Mushroom Coconut Curry",
    price: 45.46,
    image: "/images/mushroom.jpg"
  },
  {
    id: 3,
    name: "Mushroom Coconut Curry",
    price: 45.46,
    image: "/images/mushroom.jpg"
  },
  {
    id: 4,
    name: "Mushroom Coconut Curry",
    price: 45.46,
    image: "/images/mushroom.jpg"
  }
]

export default function ProductShowcase() {
  const x = useMotionValue(0)

  return (
    <section className="container mx-auto py-16 px-4">
      <div className="grid lg:grid-cols-[1fr,2fr] gap-8 items-center pl-12">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">healthy and tasty!</p>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-wide">
            Explore
            <br />
            Products
          </h2>
          <button className="size-16 bg-[#FFD84D] rounded-full flex items-center justify-center group transition-transform hover:scale-105">
            <ArrowUpRight className="size-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Right Content - Draggable Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            drag="x"
            dragConstraints={{
              left: -850,
              right: 0
            }}
            style={{ x }}
            dragElastic={0.1}
            dragTransition={{
              bounceStiffness: 300,
              bounceDamping: 20
            }}
            onDragStart={(e) => {
              e.preventDefault();
              // Explicitly stop propagation to prevent double-click issues
              e.stopPropagation();
            }}
            onMouseDown={(e) => {
              // Prevent default browser drag behavior
              e.preventDefault();
            }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="min-w-[300px] flex-shrink-0"
                whileHover={{ scale: 1.02 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-4">
                    <h3 className="text-xl font-medium">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-semibold">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                    <Button className="w-full bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}