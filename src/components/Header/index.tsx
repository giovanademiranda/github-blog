import Image from 'next/image';
import background from '../../assets/background.svg';
import PostInfo from '../PostInfo';
import Profile from '../Profile';

interface HeaderProps {
  type?: 'blog' | 'post';
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  const content = type === 'post' ? <PostInfo /> : <Profile />;

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

export default Header;
