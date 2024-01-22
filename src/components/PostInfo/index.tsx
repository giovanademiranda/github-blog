import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Link from 'next/link';

export default function PostInfo() {
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
          JavaScript data types and data structures
        </p>
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex gap-2 justify-center items-center">
          <GithubLogo size={18} weight='fill' className='text-base-label' />
          <p className='text-base-span text-base'>cameronwll</p>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <Calendar size={18} weight='fill' className='text-base-label' />
          <p className='text-base-span text-base'>Há</p>
          <span className='text-base-span text-base'>1 dia</span>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <ChatCircle size={18} weight="fill" className='text-base-label' />
          <p className='text-base-span text-base'>5</p>
          <p className='text-base-span text-base'>comentários</p>
        </div>
      </div>
    </div>
  )
}