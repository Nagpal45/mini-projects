import { stories } from '@/data'
import Image from 'next/image'
import React from 'react'

export default function MarketStories() {
  return (
    <div className="stories flex-col flex-auto flex items-center md:items-start justify-start w-full md:w-1/6 gap-8 mt-20 md:mt-5 mb-20 md:mb-5">
    <h1 className='hidden md:block text-2xl font-bold bg-gray-200 p-3 text-red-400'>Market Stories</h1>
    {stories.map((story,index)=>(<div key={index} className="w-11/12 h-fit shadow-md flex shrink flex-col overflow-hidden">
      <Image src={story.img} alt='' width={400} height={1} className='flex-auto h-40' />
      <div className="storyText p-3 ">
        <h5 className='font-bold'>{story.heading}</h5>
        <p className='text-xs'>{story.content}</p>
      </div>
    </div>))}
  </div>
  )
}
