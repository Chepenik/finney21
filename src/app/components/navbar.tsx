import Link from 'next/link';
import Image from 'next/image';
import finny from '../../../public/F21secondarygreylogo.png';

export default function Navbar() {
  return (
    <div className="nav fixed top-10 left-0 flex items-center justify-between h-16 px-8">
      <Link href="/">
        <Image
          src={finny}
          alt="F21 Primary Logo"
          width={150}
          height={150}
          className="padding-20"
        />
      </Link>
    </div>
  );
}
