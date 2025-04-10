// src/components/Socials.tsx
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="flex flex-row ml-10 mt-8 items-center">
      <a href="https://github.com/niski1996" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-green-400 transition" />
      </a>
      <a href="https://www.linkedin.com/in/karol-ziobro/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-green-400 transition" />
      </a>
      <a href="https://www.facebook.com/dummy" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="hover:text-green-400 transition" />
      </a>
      <div className="w-px h-20 bg-white mx-auto mt-4" />
    </div>
  );
};

export default Socials;
