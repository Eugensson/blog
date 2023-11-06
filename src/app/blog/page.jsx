import Link from "next/link"

export const metadata = {
    title: 'Blog | Next App',
    description: 'Blog Next App description',
}

async function getData () {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts')

    if(!responce.ok) throw new Error('Unable to fetch posts!')

    return responce.json()
}

export default async function Blog () {
    const posts = await getData()

    return (
        <>
            <h1>Blog page</h1>
            <ul>
                {posts.map(({id, title}) => (
                    <li key={id}>
                        <Link href={`/blog/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}