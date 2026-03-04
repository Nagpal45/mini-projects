import { posts } from '@/data'
import { ChatBubbleOutline, FavoriteBorderOutlined, ShareOutlined, VisibilityOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

export default function DiscussForum() {
    return (
        <div className="forum flex-auto flex items-center md:items-start justify-start w-full md:w-2/3 flex-col gap-10 mt-20 md:mt-5 mb-20 md:mb-5">
            <h1 className='hidden md:block ml-2 text-4xl font-bold bg-gray-200 p-3  text-red-400'>Discussion Forum</h1>
            {posts.map((post,index) => (
                <div key={index} className="w-11/12 shadow-xl flex border md:ml-3 rounded-xl">
                    <div className="left w-20 flex items-start justify-center">
                        <Image src={post.img} width={50} height={50} alt='' className='rounded-full mt-2' />
                    </div>
                    <div className="right w-full h-fit p-4 pl-1">
                        <div className="top w-full h-1/3 flex flex-row justify-between mb-2">
                            <div className="name flex flex-row">
                                <p className='font-bold'>{post.name}</p>
                                <p className='ml-5 text-xs pt-1 pb-1 pl-4 pr-4 text-white rounded-xl bg-blue-900'>{post.sector}</p>
                            </div>
                            <p className='text-xs text-blue-700 font-bold'>{post.time} ago</p>
                        </div>
                        <div className="center w-11/12 h-fit text-base">
                            {post.content}
                        </div>
                        <div className="bottom w-full md:w-10/12 flex h-1/3 flex-row mt-2 justify-between">
                            <div className="icon flex flex-row items-center cursor-pointer">
                                <FavoriteBorderOutlined className='text-xl'/>
                                <p className='ml-1 md:ml-3 text-xs font-bold'>{post.likes}</p>
                            </div>
                            <div className="icon flex flex-row items-center cursor-pointer">
                                <VisibilityOutlined className='text-xl'/>
                                <p className='ml-1 md:ml-3 text-xs font-bold'>{post.views}</p>
                            </div>
                            <div className="icon flex flex-row items-center cursor-pointer">
                                <ChatBubbleOutline className='text-xl'/>
                                <p className='ml-1 md:ml-3 text-xs font-bold'>{post.comments} Comments</p>
                            </div>
                            <div className="icon flex flex-row items-center cursor-pointer">
                                <ShareOutlined className='text-xl'/>
                                <p className='ml-1 md:ml-3 text-xs font-bold'>Share</p>
                            </div>
                        </div>
                    </div>
                </div>))}
        </div>
    )
}
