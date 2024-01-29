'use client'

import { Issue } from "@/types/github";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Card from "../Card";

const GITHUB_USERNAME = 'giovanademiranda';
const REPO = `${GITHUB_USERNAME}/github-blog`;

export default function Input() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Issue[]>([]);
  const router = useRouter();

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`?filter=${searchTerm}`)
  }

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          data-cy='search-input'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Buscar conteúdo"
          className="w-full bg-base-input border-base-border px-4 py-3 rounded-md .placeholder-base-label::placeholder text-base-text font-normal text-base outline-none border focus:border-brand-blue focus-within:border-2" />
      </form>
      <div className="flex flex-row gap-8 md:gap-y-8">
        {searchResults.map((post) => (
          <Link
            data-cy='post-search'
            key={post.number}
            className="w-full flex justify-center mt-10 md:justify-between"
            href={`/Post/${post.number}`}>
            <Card post={post} />
          </Link>
        ))}
      </div>
    </>
  );
}
