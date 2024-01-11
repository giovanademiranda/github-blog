import Image from 'next/image';
import background from '../../assets/background.svg';

export default function Header() {
  return (
    <header className="w-full flex max-w-7xl justify-center items-center">
      <div className="flex">
        <Image src={background} alt="Background" />
      </div>
    </header >
  )
}