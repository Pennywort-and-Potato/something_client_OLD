import React from 'react';
import { getUserPosts } from '@/src/common/APIs';
import { Space } from 'antd';
import Image from 'next/image';

interface props {
  posts: IPosts[]
}

function User(props: props) {
  const { posts } = props
  return (
    <>
      {posts ? (
        <div>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            {posts.map((post: IPosts) => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <Space>
                  {post.content.map((content: IContent) => 
                    <Image src={content.src} alt={content.alt} 
                      width={150}
                      height={50}
                      key={content.id}
                    />
                  )}
                </Space>
              </div>
            ))}
          </Space>
        </div>
      ) : null}
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: '1' } }],
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  const { pid } = context.params;

  const res = await getUserPosts(pid)
  const posts = await res.data

  return {
    props: {
      posts,
    },
  }
}
export default User;
