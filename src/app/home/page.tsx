import Navbar from '../components/navbar';
import MyButton from '../components/button';

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center text-center p-8 pt-32">
      <Navbar />
      <div className="mt-12 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:items-center"> 
        <p className="text-4xl mb-8">
          Bitcoin is portfolio insurance against systemic risks  
        </p>
        <p className="text-2xl mb-8">
          We help individuals, companies and family offices understand, acquire and custody bitcoin
        </p>
        <p className="text-gray-300 mb-8">
          This website will be updated with a contact form on 10.24.23
        </p>
        <MyButton />
      </div>
    </div>
  );
}
