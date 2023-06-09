import Link from 'next/link';
import { TbBrandLinkedin, TbMail } from 'react-icons/tb';

const Header = () => {
  return (
    <header className="px-5 pt-10">
      <div>
        <h1 className="text-white text-3xl font-semibold">Matt Tierney</h1>
        <h2 className="text-white">Frontend Web Developer</h2>
      </div>
      <div className="pt-5">
        <ul aria-label="Social media" className="flex flex-row gap-1">
          <li>
            <Link
              className=""
              href="https://www.linkedin.com/in/matt-tierney/"
              target="_blank"
              rel="Noopener noreferrer"
            >
              <TbBrandLinkedin className="h-8 w-8 text-slate-500 hover:text-sky-300" />
            </Link>
          </li>
          <li>
            <Link
              className=""
              href="mailto:matt.tierney153@gmail.com"
              target="_blank"
              rel="Noopener noreferrer"
            >
              <TbMail className="h-8 w-8 text-slate-500 hover:text-sky-300" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
