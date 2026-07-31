'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    'https://images.unsplash.com/photo-1631217314830-4700ca3a3a77?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1579154204601-01d82b27c9dc?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1516628819505-d69613fc0f3b?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1587854692152-cbe660dbde0d?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1576091160399-0ff1dfc25cb7?w=1200&h=400&fit=crop',
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full h-64 md:h-96 bg-gray-200 overflow-hidden group">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Banner ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white text-phenikaa-dark-blue rounded-full transition duration-200 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white text-phenikaa-dark-blue rounded-full transition duration-200 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-phenikaa-orange w-6'
                : 'bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
