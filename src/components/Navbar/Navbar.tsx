import Image from "next/image";
import {
  HomeIcon,
  GamepadIcon,
  AwardIcon,
  StarIcon,
  UsersIcon,
} from "@/components";

const NavbarList = ({ children }) => {
  return (
    <ul className="my-4 border-t-indigo-400 flex-grow text-slate-300">
      {children}
    </ul>
  );
};

const NavbarListItem = ({ children }) => {
  return (
    <li className=" p-2 bg-indigo-400/0 hover:bg-indigo-400/20 rounded-lg cursor-pointer flex items-center gap-x-2 hover:text-white">
      {children}
    </li>
  );
};

export const Navbar = () => {
  return (
    <nav className="bg-slate-900 flex flex-col gap-4 border-r border-indigo-400/40 p-2 h-screen w-[15%]  hover:border-indigo-400/80">
      <div>
        <Image
          src="/logo.png"
          width={300}
          height={200}
          alt="Logo"
          className="rounded-xl w-[95%] mx-auto mt-3"
        />
      </div>
      <NavbarList>
        <NavbarListItem>
          <div className="w-10 h-10 flex items-center justify-center">
            <HomeIcon className="w-6 mx-1" />
          </div>
          Home
        </NavbarListItem>
        <NavbarListItem>
          <div className="w-10 h-10 flex items-center justify-center">
            <GamepadIcon className="w-6 mx-1" />
          </div>
          About
        </NavbarListItem>
        <NavbarListItem>
          <div className="w-10 h-10  flex items-center justify-center">
            <AwardIcon />
          </div>
          Top 10
        </NavbarListItem>
        <NavbarListItem>
          <div className="w-10 h-10  flex items-center justify-center">
            <StarIcon />
          </div>
          Walkthroughs
        </NavbarListItem>
      </NavbarList>
      <ul className="my-4 border-t-indigo-400">
        <NavbarListItem>
          <div className="w-10 h-10 flex items-center justify-center">
            <UsersIcon />
          </div>
          Users
        </NavbarListItem>
      </ul>
    </nav>
  );
};
