'use client'

import React, { useEffect, useState } from 'react'
import { sanityClient } from '../../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
const urlFor = (source: any) => builder.image(source).width(400).url()

const Menu = () => {
  const [dishes, setDishes] = useState<any[]>([])
  const [activeCategory, setActiveCategory] = useState<string>('beverages')
  const [calorieLimit, setCalorieLimit] = useState<string>('')

  const categories = ['beverages', 'food', 'desserts']

  useEffect(() => {
    const fetchData = async () => {
      const result = await sanityClient.fetch(`*[_type == "menuItem" && defined(category)]{
        _id,
        name,
        description,
        price,
        image,
        calories,
        category->{
          name
        }
      }`)
      setDishes(result)
    }

    fetchData()
  }, [])

  const filteredDishes = dishes.filter(dish => {
    const categoryMatch =
      dish.category?.name?.toLowerCase() === activeCategory
    const calorieMatch =
      !calorieLimit || dish.calories <= Number(calorieLimit)
    return categoryMatch && calorieMatch
  })

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>

      <div className="flex gap-3 mb-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              activeCategory === cat ? 'bg-black text-white' : 'bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <input
        type="number"
        placeholder="Max calories"
        value={calorieLimit}
        onChange={e => setCalorieLimit(e.target.value)}
        className="mb-6 p-2 border rounded w-full max-w-xs"
      />

      {filteredDishes.length === 0 ? (
        <p className="text-gray-500">No dishes match your filters.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map(dish => (
            <div
              key={dish._id}
              className="border p-4 rounded-xl shadow bg-white"
            >
              <img
                src={urlFor(dish.image)}
                alt={dish.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="text-xl font-semibold">{dish.name}</h3>
              <p className="text-gray-600 text-sm">{dish.description}</p>
              <p className="mt-2 font-bold text-coffee-700">₹{dish.price}</p>
              <p className="text-xs text-gray-500">
                Calories: {dish.calories}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Menu
