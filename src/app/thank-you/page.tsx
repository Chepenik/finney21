import Image from "next/image";
import heart from "../../../public/thankyouheartbtc.png";

const ThankYou: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-2xl p-4">
      <h1 className="text-4xl mb-4 text-center">Thanks for getting in touch!</h1>
      <div className="mb-4">
        <Image 
          src={heart}
          alt="Thank You Heart"
          height={200}
          width={200}
        />
      </div>
      <p className="text-center mx-8">Someone from our team will contact you if we are a good fit to work together.</p>
    </div>
  );
};

export default ThankYou;
