"use client"
import Link from "next/link";
import { SidebarIcon } from "../interfaces/sidebarIcons.interface";
import { usePathname } from "next/navigation";


const SideBarMenuItem = ({path, title, icon, description} : SidebarIcon) => {

  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={`w-full px-2 inline-flex space-x-2 items-start border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 gap-2 ${pathName === path ? 'bg-blue-800' : ''}`}
    >
      <div>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">
          {title}
        </span>
        <span className="text-sm text-white/50 hidden md:block">
          {description}
        </span>
      </div>
    </Link>
  );
}

export default SideBarMenuItem