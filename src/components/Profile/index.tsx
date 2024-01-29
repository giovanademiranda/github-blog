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
    <div className="md:max-w-4xl w-full flex flex-col md:flex-row bg-base-profile rounded-lg p-8 md:gap-6">
      <div className="md:flex w-full hidden">
        <Image src={profile.avatar_url} alt='avatar' priority width={150} height={150} className='rounded-full md:rounded-md' />
      </div>
      <div className="flex w-full justify-between md:gap-48">
        <div className="flex flex-col">
          <div className="w-full flex flex-row">
            <h2 className='font-medium text-lg md:text-2xl leading-normal'>{profile.name}</h2>
          </div>

          <div className="flex pt:2 md:pt-6">
            <p className='text-base-text text-sm md:text-base'>{profile.bio}</p>
          </div>

          <div className="flex md:flex-row flex-col pt-3 md:pt-6 gap-6">
            <div className="flex gap-1 md:gap-2 justify-start items-center">
              <GithubLogo size={18} weight='fill' className='text-base-label' />
              <p className='text-base-subtitle text-sm md:text-base'>{profile.login}</p>
            </div>

            <div className="flex gap-1 md:gap-2 justify-start items-center">
              <Buildings size={18} weight='fill' className='text-base-label' />
              <p className='text-base-subtitle text-sm md:text-base'>{profile.company}</p>
            </div>

            <div className="flex gap-1 md:gap-2 justify-start items-center">
              <Users size={18} weight='fill' className='text-base-label' />
              <p className='text-base-subtitle text-sm md:text-base'>{profile.followers}</p>
              <p className='text-base-subtitle text-sm md:text-base'>seguidores</p>
            </div>
          </div>
        </div>

        <div className="flex">
          <Link className="flex gap-2 justify-end hover:underline hover:text-brand-blue" href={`https://github.com/${profile.login}`}>
            <span className='text-brand-blue md:font-bold text-xs'>GITHUB</span>
            <ArrowSquareOut size={12} className='text-brand-blue font-bold' weight='bold' />
          </Link>
        </div>
      </div>
    </div>
  );
}
