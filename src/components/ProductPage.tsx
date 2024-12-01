'use client'

import { useState } from 'react'
import { ProductCard } from '@/components/ProductCard'
import { Button } from '@/components/ui/button'

const products = [
    {
      "id": "1",
      "name": "Muesli with Soy Milk",
      "description": "A wholesome blend of whole grains, nuts, seeds, and dried fruits paired with creamy soya milk. Packed with fiber, protein, and essential nutrients, it's a perfect start to your day.",
      "image": "/images/muesli.JPG",
      "price": 6.99,
      "calories": 239,
      "protein": 7,
      "prepTime": 10,
      "category": "Breakfast"
    },
    {
      "id": "2",
      "name": "Oats with Milk and Nuts",
      "description": "A nutritious breakfast made with protein-rich milk and slow-cooked oats, enhanced with the flavor of local nuts. A hearty, home-cooked meal to fuel your day.",
      "image": "/images/oats.JPG",
      "price": 6.99,
      "calories": 266,
      "protein": 9,
      "prepTime": 10,
      "category": "Breakfast"
    },
    {
      "id": "3",
      "name": "Scrambled Egg",
      "description": "Perfectly fluffy, protein-rich scrambled eggs made with locally sourced eggs and slow-cooked in small batches for a deliciously wholesome meal.",
      "image": "/images/eggs.JPG",
      "price": 6.99,
      "calories": 355,
      "protein": 29,
      "prepTime": 10,
      "category": "Breakfast"
    },
    {
      "id": "4",
      "name": "Chicken Rice Soup",
      "description": "A comforting bowl of tender chicken and fluffy rice, slow-cooked in small batches with love. A traditional Nepali comfort food that warms the soul.",
      "image": "/images/chickenrice.JPG",
      "price": 6.99,
      "calories": 300,
      "protein": 29,
      "prepTime": 10,
      "category": "Mains"
    },
    {
      "id": "5",
      "name": "Lentil Soup",
      "description": "Traditional Nepali-style lentil soup made with black lentils and slow-cooked for rich flavor. A nutritious companion to any meal.",
      "image": "/images/dal.JPG",
      "price": 6.99,
      "calories": 360,
      "protein": 23,
      "prepTime": 10,
      "category": "Mains"
    },
    {
      "id": "6",
      "name": "Mushroom Coconut Curry",
      "description": "A creamy and aromatic curry featuring button and oyster mushrooms in a coconut base, seasoned with aromatic spices and served with rice or enjoyed as a soup.",
      "image": "/images/mushroomcurry.JPG",
      "price": 6.99,
      "calories": 201,
      "protein": 5.2,
      "prepTime": 10,
      "category": "Mains"
    },
    {
      "id": "7",
      "name": "Pumpkin Soup",
      "description": "Warm and creamy pumpkin soup made from high-altitude pumpkins grown by smallholder farmers. Rich in nutrients and naturally sweet, it's a soul-soothing bowl of comfort.",
      "image": "/images/pumpkin.JPG",
      "price": 6.99,
      "calories": 198,
      "protein": 6,
      "prepTime": 10,
      "category": "Mains"
    },
    {
      "id": "8",
      "name": "Red Sauce Pasta",
      "description": "A fusion of Italian pasta and Nepali spices, coated in a tangy tomato sauce and seasoned with garlic and basil for an authentic, heartwarming dish.",
      "image": "/images/pasta.JPG",
      "price": 6.99,
      "calories": 268,
      "protein": 9,
      "prepTime": 10,
      "category": "Mains"
    },
    {
      "id": "9",
      "name": "Spaghetti",
      "description": "Delicious spaghetti served with a creamy sauce of fresh cream, butter, basil, and black olives. A perfect blend of Italian flavor and Nepali essence.",
      "image": "/images/spaghetti.JPG",
      "price": 6.99,
      "calories": 342,
      "protein": 10,
      "prepTime": 10,
      "category": "Mains"
    },
    {
      "id": "10",
      "name": "Sticky Rice",
      "description": "Traditional glutinous sticky rice, slow-cooked and packed with fiber and protein. A versatile dish that complements a variety of meals.",
      "image": "/images/stickyrice.JPG",
      "price": 6.99,
      "calories": 350,
      "protein": 7,
      "prepTime": 10,
      "category": "Mains"
    },
    {
      "id": "11",
      "name": "Carrot Pudding",
      "description": "A sweet Nepali dessert made with locally sourced carrots, rich milk, and cottage cheese, cooked in ghee for a melt-in-your-mouth treat.",
      "image": "/images/halwa.JPG",
      "price": 6.99,
      "calories": 144,
      "protein": 5,
      "prepTime": 10,
      "category": "Dessert"
    },
    {
      "id": "12",
      "name": "Chocolate Custard",
      "description": "A rich and velvety chocolate custard made from the finest cocoa, creamy milk, and premium chocolate. A decadent dessert for chocolate lovers.",
      "image": "/images/custard.JPG",
      "price": 6.99,
      "calories": 198,
      "protein": 6,
      "prepTime": 10,
      "category": "Dessert"
    },
    {
      "id": "13",
      "name": "Sweet Rice Pudding",
      "description": "Traditional sweet rice pudding (Kheer) made with fresh buffalo milk and home-grown spices, offering a rich, flavorful experience for both dessert and meal.",
      "image": "/images/kheer.JPG",
      "price": 6.99,
      "calories": 285,
      "protein": 7,
      "prepTime": 10,
      "category": "Dessert"
    }
  ]
  

const categories = ['All Products', 'Mains', 'Breakfast', 'Dessert']

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products')

  const filteredProducts = selectedCategory === 'All Products'
    ? products
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Menu</h1>
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? "default" : "outline"}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

