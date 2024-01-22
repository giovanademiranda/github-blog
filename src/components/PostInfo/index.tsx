import { getUserProfile } from "@/app/api/services";
import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle, GithubLogo, SpinnerGap } from "@phosphor-icons/react/dist/ssr";
import Link from 'next/link';

export interface ProfileProps {
  title: string;
  login: string;
  date: string;
  comment?: string;
  description?: string;
}

const GITHUB_USERNAME = 'giovanademiranda';

async function UserProfile(username: string) {
  const profileData = await getUserProfile(GITHUB_USERNAME)
  return profileData
}

export default async function PostInfo({ title, login, date, comment, description }: ProfileProps) {
  const ProfileUser = await UserProfile(GITHUB_USERNAME)
  if (!ProfileUser) {
    return <div className="flex justify-center items-center m-96">
      <SpinnerGap className="rotate-45 animate-spin" size={64} weight="bold" />
    </div>
  }
  return (
    <div className="flex flex-col w-full justify-center bg-base-profile rounded-lg p-8">
      <div className="w-full flex flex-row justify-between items-center pb-5">
        <Link className="flex gap-2 hover:underline hover:text-brand-blue" href={'/'}>
          <CaretLeft size={12} className='text-brand-blue' weight='bold' />
          <p className='text-brand-blue text-xs font-bold'>VOLTAR</p>
        </Link>
        <Link className="flex hover:underline hover:text-brand-blue gap-2" href={'https://github.com/'}>
          <span className='text-brand-blue font-bold text-xs'>GITHUB</span>
          <ArrowSquareOut size={12} className='text-brand-blue' weight='bold' />
        </Link>
      </div>
      <div className="w-full flex flex-row pb-2">
        <p className='text-base-title text-2xl font-medium'>
          {title}
        </p>
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex gap-2 justify-center items-center">
          <GithubLogo size={18} weight='fill' className='text-base-label' />
          <p className='text-base-span text-base'>{login}</p>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <Calendar size={18} weight='fill' className='text-base-label' />
          <p className='text-base-span text-base'>Há</p>
          <span className='text-base-span text-base'>{date}</span>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <ChatCircle size={18} weight="fill" className='text-base-label' />
          <p className='text-base-span text-base'>{comment}</p>
          <p className='text-base-span text-base'>comentários</p>
        </div>
      </div>
    </div>
  )
}