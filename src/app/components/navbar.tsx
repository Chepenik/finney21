import Link from 'next/link';
import Image from 'next/image';
import finny from '../../../public/F21secondarygreylogo.png';

export default function Navbar() {
  return (
    <div className="nav fixed top-10 flex items-center justify-between h-8 px-8">
      <Link href="/home">
        <br />
        <Image
          src={finny}
          alt="F21 Primary Logo"
          width={250}
          height={250}
          className="padding-20"
        />
      </Link>
    </div>
  );
}
