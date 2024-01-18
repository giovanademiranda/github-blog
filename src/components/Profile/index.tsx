'use client'

import { getUserProfile, searchIssues } from '@/app/api/services';
import { ArrowSquareOut, Buildings, GithubLogo, SpinnerGap, Users } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Issue } from '../Card';

export interface ProfileProps {
  avatar_url: string;
  name: string;
  username: string;
  followers: number;
  company?: string;
  bio?: string;
}

const GITHUB_USERNAME = 'giovanademiranda';

export default function Profile({ avatar_url, name, username, followers, company, bio }: ProfileProps) {
  const [userProfile, setUserProfile] = useState<ProfileProps | undefined>(undefined);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const profileData = await getUserProfile(GITHUB_USERNAME);
        const issuesData = await searchIssues('owner/repo', 'search term');
        setUserProfile(profileData);
        setIssues(issuesData.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  if (!userProfile) {
    return <div className="flex justify-center items-center m-96">
      <SpinnerGap className="rotate-45 animate-spin" size={64} weight="bold" />
    </div>
  }

  return (
    <div className="max-w-4xl w-full flex justify-center bg-base-profile rounded-lg p-8 gap-4">
      <div className="flex w-[35%]">
        <Image src={avatar_url} alt='avatar' priority />
      </div>
      <div className="flex flex-col">
        <div className="w-full flex flex-row text-justify justify-between">
          <h2 className='font-medium text-2xl leading-normal'>{name}</h2>
          <Link className="flex gap-2 hover:underline hover:text-brand-blue" href={`https://github.com/${username}`}>
            <span className='text-brand-blue font-bold text-xs'>GITHUB</span>
            <ArrowSquareOut size={12} className='text-brand-blue' weight='bold' />
          </Link>
        </div>
        <div className="flex pt-2">
          <p className='text-base-text text-base'>{bio}</p>
        </div>
        <div className="flex flex-row pt-6 gap-6">
          <div className="flex gap-2 justify-center items-center">
            <GithubLogo size={18} weight='fill' className='text-base-label' />
            <p className='text-base-subtitle text-base'>{username}</p>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <Buildings size={18} weight='fill' className='text-base-label' />
            <p className='text-base-subtitle text-base'>{company}</p>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <Users size={18} weight='fill' className='text-base-label' />
            <p className='text-base-subtitle text-base'>{followers}</p>
            <p className='text-base-subtitle text-base'>seguidores</p>
          </div>
        </div>
      </div>
    </div>
  );
}
