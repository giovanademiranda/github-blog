'use client'

import Card from "@/components/Card";
import Header from "@/components/Header";
import { ProfileProps } from "@/components/Profile";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserProfile } from "./api/services";

const GITHUB_USERNAME = 'giovanademiranda';

export default function Home() {
  const [userProfile, setUserProfile] = useState<ProfileProps | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      try {
        const profileData = await getUserProfile(GITHUB_USERNAME);
        setUserProfile(profileData);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header type="blog" userProfile={userProfile} />
      <div className="max-w-4xl w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <h2 className="font-medium text-lg text-base-subtitle">Publicações</h2>
            <p className="text-sm text-base-span">6 publicações</p>
          </div>
          <input type="text" placeholder="Buscar conteúdo" className="bg-base-input border-base-border px-4 py-3 rounded-md .placeholder-base-label::placeholder text-base-text font-normal text-base outline-none border focus:border-brand-blue" />
        </div>
        <Link className="w-full grid grid-rows-3 grid-cols-2 justify-center mt-10 md:justify-between gap-8 md:gap-y-8" href={"/Post"}>
          <Card />
          <Card />

          <Card />
          <Card />

          <Card />
          <Card />
        </Link>
      </div>
    </>
  )
}
