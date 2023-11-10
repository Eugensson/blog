import { getAllPosts, getPostById } from "@/services/getPosts";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

export async function generateMetadata({ params: { id } }) {
  const post = await getPostById(id);

  return {
    title: post.title,
  };
}

async function removePost(id) {
  "use server";
  await fetch(`http://localhost:3300/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidatePath("/blog");
  redirect("/blog");
}

export default async function Post({ params: { id } }) {
  const post = await getPostById(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <Link href={`/blog/${id}/edit`}>Edit</Link>

      <form action={removePost.bind(null, id)}>
        <button type="submit">Delete post</button>
      </form>      
    </>
  );
}