export const getAllPosts = async () => {
  const response = await fetch("https://blog-eugensson.vercel.app/posts");

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

export const getPostById = async (id) => {
  const response = await fetch(
    `https://blog-eugensson.vercel.app/posts/${id}`,
    { headers: { 'Content-type': 'application/json' } }
  );

  if (!response.ok) throw new Error("Unable to fetch post.");

  return response.json();
}

export const getPostsBySearch = async (search) => {
  const response = await fetch(
    `/api/posts?q=${search}`
  );

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};
