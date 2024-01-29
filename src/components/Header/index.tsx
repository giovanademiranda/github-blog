import Image from 'next/image';
import background from '../../assets/background.svg';
import { Issue, User } from '../../types/github';
import PostInfo from '../PostInfo';
import Profile from '../Profile';

export interface HeaderProps {
  type?: 'blog' | 'post';
  userProfile?: User;
  userPost?: Issue;
}


export default function Header({ type, userProfile, userPost }: HeaderProps) {
  const content = type === 'post' ? <PostInfo post={userPost || {} as Issue} profile={userProfile ?? {} as User} /> : <Profile profile={userProfile ?? {} as User} />;

  return (
    <header className="w-full flex justify-center items-center">
      <div className='w-full md:flex flex-col items-center justify-center'>
        <Image src={background} alt="Background" className='md:flex hidden' />
        <div className="flex justify-center items-center relative md:-top-24">
          {content}
        </div>
      </div>
    </header>
  );
}