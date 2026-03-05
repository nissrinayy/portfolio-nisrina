'use client'
import React from 'react'
import data from '@/data/data.json'
import SectionHeader from './UI/SectionHeader'
import Image from 'next/image'

const AchievementsSection = () => {

  const { achievements } = data.data;

  return (
    <section id="achievements" className="bg-black text-white py-16">
      <div className="mx-auto px-6 md:px-8 lg:px-16">

        <SectionHeader 
          title={'achievements'} 
          description={'Moments & accomplishments'} 
        />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {achievements?.map((item, index) => (
            <div 
              key={index} 
              className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              
              {/* Image */}
              <div className="relative w-full h-60">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-purple-400 text-sm mt-1">
                  {item.organization} • {item.year}
                </p>

                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AchievementsSection