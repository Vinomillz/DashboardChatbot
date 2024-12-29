'use client';

import React, { useEffect, useState } from 'react';
import BackButton from '@/components/posts/BackButton';
import posts from '@/data/posts';

interface PostEditPageProps {
  params: {
    id: string;
  };
}

const PostEditPage = ({ params }: PostEditPageProps) => {
  // Use state to store the resolved params and post data
  const [resolvedParams, setResolvedParams] = useState<any>(null);
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    // Use React.use() to resolve params and fetch the post data
    async function fetchData() {
      const resolvedParams = await params; // Unwrap the Promise
      setResolvedParams(resolvedParams);

      // Find the post based on the resolved params
      const foundPost = posts.find((post) => post.id === resolvedParams.id);
      setPost(foundPost);
    }

    fetchData();
  }, [params]);

  // Handle loading state while resolving params
  if (!resolvedParams || !post) {
    return <div>Loading...</div>;
  }

  // If post not found
  if (!post) {
    return <div>Shipment not found</div>;
  }

  return (
    <>
      <BackButton text='Back To Shipments' link='/posts' />
      <h3 className='text-2xl mb-4'>Shipments Details</h3>

      <div className='space-y-8'>
        <div>
          <h4 className='text-xl font-bold'>Title</h4>
          <p>{post.title}</p>
        </div>

        <div>
          <h4 className='text-xl font-bold'>Body</h4>
          <p>{post.body}</p>
        </div>

        <div>
          <h4 className='text-xl font-bold'>Driver</h4>
          <p>{post.author}</p>
        </div>

        <div>
          <h4 className='text-xl font-bold'>Date</h4>
          <p>{post.date}</p>
        </div>
      </div>
    </>
  );
};

export default PostEditPage;
