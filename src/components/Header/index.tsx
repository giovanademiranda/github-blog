import Image from 'next/image';
import background from '../../assets/background.svg';
import PostInfo from '../PostInfo';
import Profile from '../Profile';

export interface HeaderProps {
  type?: 'blog' | 'post';
  userProfile?: {
    avatar_url: string;
    name: string;
    login: string;
    followers: number;
    company?: string;
    bio?: string;
  };
  userPost?: {
    title: string;
    login: string;
    created_at: number;
    comments_url?: string;
  };
}

export default function Header({ type, userProfile, userPost }: HeaderProps) {
  const profileContent = userProfile && (
    <Profile
      avatar_url={userProfile.avatar_url}
      name={userProfile.name}
      username={userProfile.login}
      followers={userProfile.followers}
      company={userProfile.company}
      bio={userProfile.bio}
    />
  );

  const postContent = userPost && (
    <PostInfo
      title={userPost.title}
      username={userPost.login}
      created_at={userPost.created_at}
      comments_url={userPost.comments_url}
    />
  )

  const content = type === 'post' ? postContent : profileContent;

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