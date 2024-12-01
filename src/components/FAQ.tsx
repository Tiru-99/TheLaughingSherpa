"use client"

import { useState } from "react"
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion';


export default function FAQ() {
  const faqs = [
    {
      "question": "What are TLS adventure meals?",
      "answer": "The Laughing Sherpa meals are lightweight, portable, freeze-dried meals designed for outdoor activities like hiking, camping, or trekking. They provide essential nutrition and are easy to prepare with just water."
    },
    {
      "question": "Do adventure meals contain any preservatives?",
      "answer": "No, TLS meals do not have any added preservatives or chemicals."
    },
    {
      "question": "How do I prepare a TLS meal?",
      "answer": "Almost all our meals require hot water to rehydrate. Simply add boiling water to the pouch, stir, seal, and let it sit for 5-10 minutes. Our meals may also be prepared with cold water too but rehydration time will be longer depending on the meal and ambient temperature."
    },
    {
      "question": "What is the shelf life of TLS meals?",
      "answer": "Depending on the meal pack, our meals typically have a shelf life of 2-5 years when stored in a cool, dry place. Freeze-dried meals generally last longer than dehydrated ones."
    },
    {
      "question": "Are TLS meals nutritious?",
      "answer": "Yes, TLS meals are designed to provide balanced nutrition, including carbohydrates, proteins, and fats, along with essential vitamins and minerals. Check the nutrition label for details, as some meals cater to specific dietary needs."
    },
    {
      "question": "How are freeze-dried and dehydrated meals different?",
      "answer": "Freeze-dried meals retain more of their original texture and nutrients compared to dehydrated meals, which can be slightly tougher or chewier. Freeze-drying removes moisture quickly, while dehydration uses slower heat processes."
    },
    {
      "question": "Are there vegetarian or vegan options available?",
      "answer": "Yes, TLS offers vegetarian, vegan, and gluten-free options to cater to different dietary preferences. Be sure to check the label for specific ingredients."
    },
    {
      "question": "How much water do I need to prepare TLS meals?",
      "answer": "Most TLS meals require 1-2 cups of water per serving, but this can vary depending on the meal type. The package instructions will specify the exact amount of water needed."
    },
    {
      "question": "Can I eat adventure meals without hot water?",
      "answer": "While TLS meals are designed for hot water preparation, some can be rehydrated with cold water in a pinch. The texture and flavour might not be as optimal, but they will still be safe to eat. Some of our meals can be munched even without water and they will still taste awesome."
    }
  ]

  //setting the faq array to value as false
  const array = faqs.map(() => false)

  const [openStates, setOpenStates] = useState(array)

  const handleClickOpen = (index: number) => {
    setOpenStates((prevState) => {
      //reset Array state for setting all the values of prevstate to one so that only one answer is displayed everytime 
      const resetArray = prevState.map(() => false)
      const updatedStatesArray = [...resetArray]
      updatedStatesArray[index] = !prevState[index]
      return updatedStatesArray
    })
  }

  return (
    <div className="py-12 md:py-20 bg-gray-100">
                <div className="container px-4 md:px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">FAQs</h1>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-200 last:border-0"
                    >
                        <button
                        className="flex items-center justify-between w-full py-4 text-left"
                        onClick={() => handleClickOpen(index)}
                        >
                        <span className="text-lg font-medium">{faq.question}</span>
                        <motion.div
                            animate={{ rotate: openStates[index] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                        </motion.div>
                        </button>
                        <AnimatePresence>
                        {openStates[index] && (
                            <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                            >
                            <p className="text-gray-600 pb-4 pr-12">{faq.answer}</p>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                    ))}
                </div>
                </div>
            </div>
  )
}

