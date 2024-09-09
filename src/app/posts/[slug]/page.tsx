import prisma from '@/lib/db';
import React from 'react'

const PostPage = async ({ params: {params: {slug: string}} }) => {

const post = await prisma.post.findUnique({
  where: {
    slug: params.slug
  }
})
  return (
    <main className='flex flex-col items-center gap-y-5 pt-24 text-center'>
       <h1 className='text-3xl font-semibold'>{post?.title}</h1>
       <p>{post?.content}</p>
    </main>
  )
}

export default PostPage