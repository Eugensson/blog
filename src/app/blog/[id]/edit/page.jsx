import { getPostById } from "@/services/getPosts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function updatePost(data) {
  "use server";

  const { title, body, id } = Object.fromEntries(data);

  const response = await fetch(`https://blog-eugensson.vercel.app/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  const post = await response.json();

  revalidatePath("/blog");
  redirect("/blog");
}

export default async function Profile({ params: { id } }) {
  const post = await getPostById(id);

  return (
    <div>
      <h1>Profile of {post.title}</h1>

      <form className="form" action={updatePost}>
        <input
          type="text"
          placeholder="title"
          required
          name="title"
          defaultValue={post.title}
        />
        <textarea
          placeholder="content"
          required
          name="body"
          defaultValue={post.body}
        />
        <input type="hidden" name="id" value={post.id} />
        <div>
          <input type="submit" value="Update post" />
        </div>
      </form>
    </div>
  );
}
