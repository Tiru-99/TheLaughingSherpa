'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

export default function WhyChooseUsCarousel() {
  const features = [
    {
      title: "Crafted for Adventurers",
      description: "Our meals are thoughtfully designed to fuel your expeditions, whether you're trekking the Himalayas, high-altitudes and Lightweight, nutrient-packed, and easy to prepare, our meals keep you energised on the trail without sacrificing flavour.",
      image: "/images/adventure2.jpg",
    },
    {
      title: "No Chemicals, No Preservatives",
      description: "Our meals are 100% natural, free from harmful chemicals, artificial additives, and preservatives. You get pure, wholesome nutrition, just as nature intended.",
      image: "/images/natural.jpg",
    },
    {
      title: "Authentic Nepali Flavours",
      description: "Our meals are thoughtfully crafted, free from harmful chemicals and artificial additives and preservatives. You get pure, wholesome nutrition, just as nature intended.",
      image: "/images/spices.jpg",
    },
    {
      title: "Locally Sourced Ingredients",
      description: "Our meals are thoughtfully crafted, free from harmful chemicals and artificial additives and preservatives. You get pure, wholesome nutrition, just as nature intended.",
      image: "/images/local.jpg",
    },
    {
      title: "High-Quality Ingredients",
      description: "We use only the finest ingredients, sourced with care to ensure every bite is packed with the nutrients you need for your outdoor adventures.",
      image: "/images/highquality.jpg",
    },
    {
      title: "Eco-Friendly Packaging",
      description: " We’re as committed to preserving nature as you are. That’s why we use sustainable, biodegradable, and lightweight packaging to minimise waste, so you can explore the world without leaving a trace.",
      image: "/images/ecofriendly.jpg",
    },
    {
      title: "Convenient & Versatile",
      description: "Quick to prepare with just water and heat, our meals are perfect for adventurers who need something simple, delicious, and mess-free, no matter where their journey takes them.",
      image: "/images/candv.jpg",
    },
    {
      title: "Supporting Mountain Communities",
      description: "We proudly give back to the mountain communities that inspire us, working with local farmers and sustainable practices to support people and the environment.",
      image: "/images/community.jpg",
    },
   
  ]

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="w-full lg:w-1/4 lg:top-24">
          <h2 className="text-5xl lg:text-7xl font-semibold mb-6 lg:mb-0 text-left leading-tight">
            Why Choose Us?
          </h2>
        </div>
        <div className="w-full lg:w-3/4">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 shadow-none">
                    <CardContent className="p-4 md:p-6">
                      <div className="aspect-[4/3] relative mb-4 md:mb-6 overflow-hidden rounded-lg">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2" />
              <CarouselNext className="absolute -right-12 top-1/2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

