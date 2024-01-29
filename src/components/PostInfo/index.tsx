import { getUserProfile } from "@/app/api/services";
import { Issue, User } from "@/types/github";
import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle, GithubLogo, SpinnerGap } from "@phosphor-icons/react/dist/ssr";
import { format } from "date-fns";
import Link from 'next/link';

const GITHUB_USERNAME = 'giovanademiranda';

async function UserProfile(username: string) {
  const profileData = await getUserProfile(GITHUB_USERNAME)
  return profileData
}

export default async function PostInfo({ post, profile }: { post: Issue, profile: User }) {
  const isValidDate = new Date(post.created_at).toString() !== 'Invalid Date';
  const formattedCreatedAt = isValidDate ? format(new Date(post.created_at), 'dd/MM/yy') : 'Data inválida';

  const profileUser = await UserProfile(GITHUB_USERNAME)
  if (!profileUser) {
    return <div className="flex justify-center items-center m-96">
      <SpinnerGap className="rotate-45 animate-spin" size={64} weight="bold" />
    </div>
  }

  return (
    <div className="flex flex-col w-full justify-center bg-base-profile rounded-lg p-6">
      <div className="w-full flex flex-row justify-between items-center pb-5">
        <div className="flex">
          <Link data-cy='back-button' className="flex gap-2 hover:underline hover:text-brand-blue" href={'/'}>
            <CaretLeft size={12} className='text-brand-blue' weight='bold' />
            <p className='text-brand-blue text-xs font-bold'>VOLTAR</p>
          </Link>
        </div>
        <div className="flex">
          <Link data-cy='github-link-issue' className="flex hover:underline hover:text-brand-blue gap-2" href={`https://github.com/giovanademiranda/github-blog/issues/${post.number}`}>
            <span className='text-brand-blue font-bold text-xs'>GITHUB</span>
            <ArrowSquareOut size={12} className='text-brand-blue' weight='bold' />
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-row pb-2">
        <p className='text-base-title text-2xl font-medium'>
          {post.title}
        </p>
      </div>
      <div className="flex flex-row gap-60">
        <div className="flex gap-2 justify-center items-center">
          <GithubLogo size={18} weight='fill' className='text-base-label' />
          <p className='text-base-span text-base'>{profileUser.login}</p>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <Calendar size={18} weight='fill' className='text-base-label' />
          <span className='text-base-span text-base'>{formattedCreatedAt}</span>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <ChatCircle size={18} weight="fill" className='text-base-label' />
          <p className='text-base-span text-base'>{post.comments?.length} comentár{post.comments?.length > 1 ? 'ios' : 'io'}</p>
        </div>
      </div>
    </div>
  )
}