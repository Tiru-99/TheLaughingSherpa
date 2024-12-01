import Image from 'next/image'
import { Clock, FlameIcon as Fire, Beef } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

interface ProductCardProps {
  id: string
  name: string
  description: string
  image: string
  price: number
  calories: number
  protein: number
  prepTime: number
  category: string
}

export function ProductCard({ 
  name, 
  description, 
  image, 
  price, 
  calories, 
  protein, 
  prepTime 
}: ProductCardProps) {

    const router = useRouter(); 

    const redirectToWhatsapp = () =>{
        router.push("https://wa.me/+9779802348523?text=Hello%20there!%20I'd%20like%20to%20contact%20you%20regarding%20The%20Laughing%20Sherpa.")
    }
    
  return (
    <Card className="overflow-hidden bg-white rounded-lg">
      <div className="relative h-48 w-full bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          objectFit="cover"
        />
      </div>
      <CardContent className="p-4 space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight">{name}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        
        <div className="pt-2">
          <span className="text-2xl font-bold">${price.toFixed(2)}</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Fire className="w-5 h-5 text-red-500 " />
            <span>{calories} cal</span>
          </div>
          <div className="flex items-center gap-2">
            <Beef className="w-5 h-5 text-green-500 " />
            <span>{protein}g protein</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-500" />
            <span>Ready in {prepTime} mins</span>
          </div>
        </div>

        <Button className="w-full bg-black hover:bg-gray-800 text-white" size="lg"
        onClick={redirectToWhatsapp}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}

