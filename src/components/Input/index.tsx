'use client'

import { searchIssues } from "@/app/api/services";
import { Issue } from "@/types/github";
import Link from "next/link";
import { useState } from 'react';
import Card from "../Card";

interface InputProps {
  onSearch: (searchTerm: string) => void;
}
const GITHUB_USERNAME = 'giovanademiranda';
const REPO = `${GITHUB_USERNAME}/github-blog`;

export default function Input({ onSearch }: InputProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Issue[]>([]);

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const issuesData = await searchIssues(REPO, Number(searchTerm));
    setSearchResults(issuesData.items || []);
  }

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Buscar conteúdo"
          className="bg-base-input border-base-border px-4 py-3 rounded-md .placeholder-base-label::placeholder text-base-text font-normal text-base outline-none border focus:border-brand-blue" />
      </form>
      <div className="flex flex-row gap-8 md:gap-y-8">
        {searchResults.map((post) => (
          <Link key={post.number} className="w-full flex justify-center mt-10 md:justify-between" href={`/Post/${post.number}`}>
            <Card post={post} />
          </Link>
        ))}
      </div>
    </>
  );
}
