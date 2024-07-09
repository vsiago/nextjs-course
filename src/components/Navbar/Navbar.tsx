import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  GamepadIcon,
  AwardIcon,
  StarIcon,
  UsersIcon,
} from "@/components";

type NavbarProps = React.ComponentProps<"nav">;
type NavbarListProps = React.ComponentProps<"ul">;
type NavbarListItemProps = React.ComponentProps<"li">;
type NavbarListItemPropsLink = React.ComponentProps<typeof Link>;

const NavbarList = ({ children, className, ...props }: NavbarListProps) => {
  return (
    <ul
      className={`my-4 border-t-indigo-400 flex-grow text-slate-300 ${className}`}
      {...props}
    >
      {children}
    </ul>
  );
};

const NavbarListItem = ({
  children,
  className,
  ...props
}: NavbarListItemProps) => {
  return (
    <li
      className={`p-2 bg-indigo-400/0 hover:bg-indigo-400/20 rounded-lg cursor-pointer flex items-center gap-x-2 hover:text-white ${className}`}
      {...props}
    >
      {children}
    </li>
  );
};

const NavbarListItemLink = ({
  children,
  className,
  href,
  ...props
}: NavbarListItemPropsLink) => {
  return (
    <NavbarListItem>
      <Link
        href={href}
        className={`flex items-center w-full h-full ${className}`}
        {...props}
      >
        {children}
      </Link>
    </NavbarListItem>
  );
};

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav
      className={`bg-slate-900 flex flex-col gap-4 border-r border-indigo-400/40 p-2 h-screen w-[15%]  hover:border-indigo-400/80 ${className}`}
    >
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
        <NavbarListItemLink href="/" className="">
          <div className="w-10 h-10 flex items-center justify-center">
            <HomeIcon className="w-6 mx-1" />
          </div>
          Home
        </NavbarListItemLink>
        <NavbarListItemLink href="/about">
          <div className="w-10 h-10 flex items-center justify-center">
            <GamepadIcon className="w-6 mx-1" />
          </div>
          About
        </NavbarListItemLink>
        <NavbarListItemLink href="/top-10">
          <div className="w-10 h-10  flex items-center justify-center">
            <AwardIcon />
          </div>
          Top 10
        </NavbarListItemLink>
        <NavbarListItemLink href="/walkthroughs">
          <div className="w-10 h-10  flex items-center justify-center">
            <StarIcon />
          </div>
          Walkthroughs
        </NavbarListItemLink>
      </NavbarList>
      <ul className="my-4 border-t-indigo-400">
        <NavbarListItemLink href="/users">
          <div className="w-10 h-10 flex items-center justify-center">
            <UsersIcon />
          </div>
          Users
        </NavbarListItemLink>
      </ul>
    </nav>
  );
};
