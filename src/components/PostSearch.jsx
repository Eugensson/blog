'use client';

import { useState } from 'react';

import { getPostsBySearch } from '@/services/getPosts';

export default function PostSearch ({onSearch}) {
    const [search, setSearch] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const posts = await getPostsBySearch(search);
        
        onSearch(posts);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='search'
                placeholder='search'
                value={search}
                onChange={e => setSearch(e.target.value)}
            ></input>
            <button type='submit'>Search</button>
        </form>
    )
}