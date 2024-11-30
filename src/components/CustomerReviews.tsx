import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Adventure Enthusiast",
    content: "The meal packets were perfect for my Himalayan trek. Lightweight, nutritious, and surprisingly delicious! Couldn't have asked for better trail food.",
    avatar: "/images/woman.jpg",
    verified: true,
  },
  {
    id: 2,
    name: "David Chen",
    role: "Professional Climber",
    content: "As someone who values clean eating, I'm impressed by their commitment to natural ingredients. The flavors are authentic and energizing.",
    avatar: "/images/woman.jpg",
    verified: true,
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Nutrition Expert",
    content: "Finally, a company that truly understands the needs of outdoor enthusiasts. The attention to nutritional detail is impressive.",
    avatar: "/images/woman.jpg",
    verified: true,
  }
]

export default function CustomerReviews() {
  return (
    <section className="w-full bg-amber-400 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr,2fr]">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-widest sm:text-4xl md:text-6xl max-w-md md:pl-4">
              Customer Reviews
            </h2>
        
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
            {reviews.map((review) => (
              <Card 
                key={review.id} 
                className="relative overflow-hidden transition-all hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <Quote className="absolute right-6 top-6 h-12 w-12 opacity-10" />
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{review.name}</h3>
                        {review.verified && (
                          <Badge variant="secondary" className="h-5">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{review.role}</p>
                    </div>
                  </div>
                  <blockquote className="mt-4 text-gray-700">
                    {review.content}
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

