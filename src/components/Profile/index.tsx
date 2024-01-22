import { getUserProfile } from '@/app/api/services';
import { ArrowSquareOut, Buildings, GithubLogo, SpinnerGap, Users } from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';
import Link from 'next/link';

export interface ProfileProps {
  avatar_url: string;
  name: string;
  username: string;
  followers: number;
  company?: string;
  bio?: string;
}

const GITHUB_USERNAME = 'giovanademiranda';

async function UserProfile(username: string) {
  const profileData = await getUserProfile(GITHUB_USERNAME)
  return profileData
}

export default async function Profile({ avatar_url, name, username, followers, company, bio }: ProfileProps) {
  const ProfileUser = await UserProfile(GITHUB_USERNAME)
  if (!ProfileUser) {
    return <div className="flex justify-center items-center m-96">
      <SpinnerGap className="rotate-45 animate-spin" size={64} weight="bold" />
    </div>
  }

  return (
    <div className="max-w-4xl w-full flex bg-base-profile rounded-lg p-8 gap-6">
      <div className="flex">
        <Image src={avatar_url} alt='avatar' priority width={200} height={200} className='rounded-md' />
      </div>
      <div className="flex flex-col">
        <div className="w-full flex flex-row justify-between">
          <h2 className='font-medium text-2xl leading-normal'>{name}</h2>
          <Link className="flex gap-2 justify-end hover:underline hover:text-brand-blue" href={`https://github.com/${username}`}>
            <span className='text-brand-blue font-bold text-xs'>GITHUB</span>
            <ArrowSquareOut size={12} className='text-brand-blue font-bold' weight='bold' />
          </Link>
        </div>
        <div className="flex pt-6">
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
