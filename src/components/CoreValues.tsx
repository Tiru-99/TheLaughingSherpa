

export default function CoreValues() {
  const values = [
    { title: "Product Pages and Categories", description: "Organize meals into categories like Breakfast, Lunch, Dinner, and dietary options (Vegan, Gluten-Free). Each page should include high-quality images, detailed descriptions, and Add to Cart buttons, along with customer reviews and ratings for easy shopping." },
    { title: "Sustainability", description: " Focus on eco-friendly packaging and highlight social or environmental initiatives, especially those benefiting mountain communities, to align with your brand's commitment to sustainability." },
    { title: "Adventure Inspiration", description: "Feature a blog with adventure stories, meal tips, and nutritional advice. Add a gallery of user-generated content from customers enjoying meals during outdoor trips and highlight partnerships with adventure companies and influencers." },
    { title: "Subscription & Meal Plans", description: "Offer custom meal plans for specific adventures (e.g., 3-day trek) and introduce a subscription box service, with plans to integrate Shopify's subscription tools in the future for convenience." },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center md:text-6xl text-4xl md:font-bold tracking-wider font-extrabold text-gray-800 mb-10">
          Our Core Values
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                <img src='/images/circle.png' className="w-10 h-10 text-yellow-500" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 mt-2 font-thin">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
