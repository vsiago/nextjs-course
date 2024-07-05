import Image from "next/image";

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
      <ul className="my-4 border-t-indigo-400 flex-grow">
        <li className="p-2 bg-indigo-400/0 hover:bg-indigo-400/20 rounded-lg cursor-pointer">
          Home
        </li>
        <li className="p-2 bg-indigo-400/0 hover:bg-indigo-400/20 rounded-lg cursor-pointer">
          About
        </li>
        <li className="p-2 bg-indigo-400/0 hover:bg-indigo-400/20 rounded-lg cursor-pointer">
          Top 10
        </li>
        <li className="p-2 bg-indigo-400/0 hover:bg-indigo-400/20 rounded-lg cursor-pointer">
          Walkthroughs
        </li>
      </ul>
      <ul className="my-4 border-t-indigo-400">
        <li className="p-2 bg-indigo-400/0 hover:bg-indigo-400/20 rounded-lg cursor-pointer">
          Users
        </li>
      </ul>
    </nav>
  );
};
