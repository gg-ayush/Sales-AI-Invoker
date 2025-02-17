"use client"

import { CardDescription } from '@/components/ui/card';
import { posts } from '@/constants/landing-page';
import { useParams, usePathname } from 'next/navigation';
import parse from 'html-react-parser';
import React from 'react';
import Image from 'next/image';

type Props = {params: {id: string } };

const PostPage = (params: Props) => {
    const blogId = useParams()

  return (

    <div className='container flex justify-center my-10'>
        <div className='lg:w-6/12 flex flex-col'>
            <CardDescription>
            {posts.find((post) => post.id === blogId.id )?.createdAt}
            </CardDescription>
            <h2 className='text-6xl font-bold'>
            {posts.find((post) => post.id === blogId.id )?.title}
            </h2>
            <div>
                <Image 
                    src={posts.find((post) => post.id === blogId.id )?.image!}
                    alt="blog image"
                    width={500}
                    height={100}
                    className='justify-center max-w-lg text-center'
                />
                
            </div>
            <div>
                {posts.find((post) => post.id === blogId.id )?.content}
            </div>
        </div>
    </div>
  )
}

export default PostPage