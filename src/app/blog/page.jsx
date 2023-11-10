import Link from "next/link";

import { getAllPosts } from "@/services/getPosts";

export const metadata = {
  title: "Blog | Next App",
};

export const revalidate = 10;

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <>
      <h1>Blog page</h1>
      <Link href="/blog/new">Add new post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
