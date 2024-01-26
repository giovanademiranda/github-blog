import { getUserProfile } from '@/app/api/services';
import { User } from '@/types/github';
import { ArrowSquareOut, Buildings, GithubLogo, SpinnerGap, Users } from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';
import Link from 'next/link';

const GITHUB_USERNAME = 'giovanademiranda';

async function UserProfile(username: string) {
  const profileData = await getUserProfile(GITHUB_USERNAME)
  return profileData
}

export default async function Profile({ profile }: { profile: User }) {
  const ProfileUser = await UserProfile(GITHUB_USERNAME)
  if (!ProfileUser) {
    return <div className="flex justify-center items-center m-96">
      <SpinnerGap className="rotate-45 animate-spin" size={64} weight="bold" />
    </div>
  }

  return (
    <div className="max-w-4xl w-full flex flex-row bg-base-profile rounded-lg p-8 gap-6">
      <div className="flex w-full">
        <Image src={profile.avatar_url} alt='avatar' priority width={150} height={150} className='rounded-md' />
      </div>
      <div className="flex w-full justify-between gap-48">
        <div className="flex flex-col">
          <div className="w-full flex flex-row">
            <h2 className='font-medium text-2xl leading-normal'>{profile.name}</h2>
          </div>

          <div className="flex pt-6">
            <p className='text-base-text text-base'>{profile.bio}</p>
          </div>
          <div className="flex flex-row pt-6 gap-6">
            <div className="flex gap-2 justify-center items-center">
              <GithubLogo size={18} weight='fill' className='text-base-label' />
              <p className='text-base-subtitle text-base'>{profile.login}</p>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <Buildings size={18} weight='fill' className='text-base-label' />
              <p className='text-base-subtitle text-base'>{profile.company}</p>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <Users size={18} weight='fill' className='text-base-label' />
              <p className='text-base-subtitle text-base'>{profile.followers}</p>
              <p className='text-base-subtitle text-base'>seguidores</p>
            </div>
          </div>
        </div>

        <div className="flex">
          <Link className="flex gap-2 justify-end hover:underline hover:text-brand-blue" href={`https://github.com/${profile.login}`}>
            <span className='text-brand-blue font-bold text-xs'>GITHUB</span>
            <ArrowSquareOut size={12} className='text-brand-blue font-bold' weight='bold' />
          </Link>
        </div>
      </div>
    </div>
  );
}
