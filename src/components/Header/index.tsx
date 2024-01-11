import Image from 'next/image';
import background from '../../assets/background.svg';
import Profile from '../Profile';

export default function Header() {
  return (
    <header className="w-full flex justify-center items-center">
      <div className='flex flex-col items-center justify-center'>
        <Image src={background} alt="Background" />
        <div className="flex justify-center items-center relative -top-24">
          <Profile />
        </div>
      </div>
    </header >
  )
}