import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";

export const metadata = {
    title: 'Blog | Next App',
    description: 'Blog Next App description',
}

const Blog = () => {
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </>
  );
}

export default Blog;