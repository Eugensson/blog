import Link from 'next/link';

export default function Posts ({posts}) {
  return (
    <ul>
        {posts.map(({id, title}) => (
            <li key={id}>
                <Link href={`/blog/${id}`}>{title}</Link>
            </li>
        ))}
    </ul>
  )
}