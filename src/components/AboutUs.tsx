"use client";
import React from "react";

const AboutUs = () => {
  return (
    <section className="relative bg-black text-white py-16 px-8 sm:px-12 md:px-16 lg:px-20 flex flex-col lg:flex-row items-start lg:items-start gap-10">
      {/* Left Section */}
      <div className="lg:w-1/2 mb-10 lg:mb-0" id="about">
        <h4 className="text-base sm:text-lg font-medium text-yellow-400 uppercase mb-4 tracking-wider">
          About Us
        </h4>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug sm:leading-tight">
          The Laughing Sherpa: A Tribute to the Himalayas
        </h2>


        <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
          The Sherpas are more than just guides—they are the guardians of the
          world&apos;s tallest peaks, facing extreme conditions with resilience and
          unwavering spirit. Their selflessness has helped countless
          adventurers realize their dreams of reaching the impossible.
        </p>
        <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
          In 2021, we began by delivering dehydrated fruits and vegetables to
          climbing communities. Through feedback from guides and climbers, we
          realized the need for affordable, pre-prepped meals that could
          provide the necessary nutrition for Nepali climbers in such adverse
          environments.
        </p>
        <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
          A core part of our mission is sourcing local ingredients. Nearly all
          of our meals are prepared with fresh produce from rural smallholder
          farmers, ensuring high-quality ingredients grown with care and
          passion. By doing this, we support the local economy and connect our
          meals with the rich landscapes of Nepal.
        </p>
        <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
          Whether scaling mountains or camping in your backyard, The Laughing
          Sherpa ensures that you’re not only fueled for your adventure but
          also connected to the warmth and richness of Nepalese culture.
        </p>
        <a
          href="https://wa.me/+9779802348523?text=Hello%20there!%20I'd%20like%20to%20contact%20you%20regarding%20The%20Laughing%20Sherpa."
          className="inline-block bg-yellow-400 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-yellow-500"
        >
          Contact Now
        </a>
      </div>

      {/* Right Section (Enhanced Image Design) */}
      <div className="relative lg:w-1/2 flex justify-center items-center self-start lg:self-center">
        {/* Abstract Background Circles */}
        <div className="absolute -top-16 -left-16 bg-yellow-400 rounded-full w-72 h-72 md:w-96 md:h-96 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-8 -right-16 bg-yellow-400 rounded-full w-56 h-56 md:w-72 md:h-72 opacity-40 blur-2xl"></div>

        {/* Image with Hover Effects */}
        <div className="relative group overflow-hidden rounded-lg shadow-2xl border border-yellow-400">
          <img
            src="/images/laughing.png" // Replace with your image URL
            alt="About Us"
            className="transition-all duration-500 transform group-hover:scale-110 group-hover:shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
