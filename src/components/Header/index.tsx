import Image from 'next/image';
import background from '../../assets/background.svg';
import PostInfo from '../PostInfo';
import Profile from '../Profile';

export interface HeaderProps {
  type?: 'blog' | 'post';
  userProfile?: {
    avatar_url: string;
    name: string;
    username: string;
    followers: number;
    company?: string;
    bio?: string;
  };
}


export default function Header({ type, userProfile }: HeaderProps) {
  const profileContent = userProfile && (
    <Profile
      avatar_url={userProfile.avatar_url}
      name={userProfile.name}
      username={userProfile.username}
      followers={userProfile.followers}
      company={userProfile.company}
      bio={userProfile.bio}
    />
  );

  const content = type === 'post' ? <PostInfo /> : profileContent;

  return (
    <header className="w-full flex justify-center items-center">
      <div className='flex flex-col items-center justify-center'>
        <Image src={background} alt="Background" />
        <div className="flex justify-center items-center relative -top-24">
          {content}
        </div>
      </div>
    </header>
  );
}