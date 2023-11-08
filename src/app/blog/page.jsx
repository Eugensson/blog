import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";

export const metadata = {
  title: "Blog | Next App",
};

export default function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </>
  );
}