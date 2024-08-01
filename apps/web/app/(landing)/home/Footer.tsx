import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/icons/Vector.png";

const Footer = () => {
  return (
    <footer className="text-black py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Image src={logo} alt="Logo" className="h-8 mr-2 object-contain" />
          <span className="text-xl font-bold">elevate</span>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link href="/features" className="hover:underline">
            Features
          </Link>
          <Link href="/pricing" className="hover:underline">
            Pricing
          </Link>
          <Link href="/help" className="hover:underline">
            Help
          </Link>
          <Link href="/templates" className="hover:underline">
            Templates
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
        </div>
        <div className="flex items-center">
          <span className="mr-4">Ready to get collaborate?</span>
          <button className="bg-black text-white font-bold py-1 px-3  rounded h-12">
            Get Started
          </button>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>&copy; 2024 elevate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
