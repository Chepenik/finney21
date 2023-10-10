import Navbar from '../components/navbar';
import Link from 'next/link';
import MyButton from '../components/button';

export default function Home() {

  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center text-center p-8">
      <Navbar />
        <br />
        <br />
        <p className="text-4xl mb-8">
            Bitcoin is portfolio insurance against systemic risks  
        </p>
          <br />
        <p className="text-2xl mb-8">
            We help individuals, companies and family offices understand, acquire and custody bitcoin
        </p>
          <br />
        <p className="text-gray-300 mb-8">
            This website will be updated with a contact form on 10.24.23
        </p>
        <p className="text-gray-500 mb-8">
        npub1ks2lwal5ewlzpsgvtsc82kteszpyvnjcnfypmzepw5kd3pvaxtaq9fpkex
        </p>
        <MyButton />
    </div>
  )
}
