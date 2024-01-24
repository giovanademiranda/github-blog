import Image from 'next/image';
import background from '../../assets/background.svg';
import { Issue, User } from '../../types/github';
import PostInfo from '../PostInfo';
import Profile from '../Profile';

export interface HeaderProps {
  type?: 'blog' | 'post';
  userProfile?: User;
  userPost?: Issue & User
}


export default function Header({ type, userProfile, userPost }: HeaderProps) {
  const profileContent = userProfile && (
    <Profile
      avatar_url={userProfile.avatar_url}
      name={userProfile.name}
      username={userProfile.login}
      followers={userProfile.followers_url}
      company={userProfile.company}
      body={userProfile.body}
    />
  );

  const content = type === 'post' ? <PostInfo post={userPost} profile={userProfile} /> : profileContent;

  return (
    <header className="w-full flex justify-center items-center">
      <div className='w-full flex flex-col items-center justify-center'>
        <Image src={background} alt="Background" />
        <div className="flex justify-center items-center relative -top-24">
          {content}
        </div>
      </div>
    </header>
  );
}