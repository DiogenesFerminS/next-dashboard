import Image from "next/image";
import { RiNextjsLine } from "react-icons/ri";
import { SidebarIcon } from "../interfaces/sidebarIcons.interface";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeartOutline } from "react-icons/io5";
import SideBarMenuItem from "./SideBarMenuItem";

const MenuItems: SidebarIcon[] = [
    {
        title: 'Dashboard',
        description: 'Visualizacion',
        icon: <IoBrowsersOutline size={30}/>,
        path: '/dashboard/main'
    },
    {
        title: 'Counter',
        description: 'Contador client side',
        icon: <IoCalculator size={30}/>,
        path: '/dashboard/counter'
    },
    {
      title: 'Pokemons',
      description: 'Generacion estatica',
      icon: <IoFootball size={30}/>,
      path: '/dashboard/pokemons'
    },
    {
      title: 'Favorite',
      description: 'Favorites Pokemons',
      icon: <IoHeartOutline size={30}/>,
      path: '/dashboard/favorite'
    }
]

const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{width:'400px'}}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen sticky top-0"
    >
      <div id="logo" className="my-4 px-6">
        <div className="flex items-center gap-2 justify-start">
            <h1 className="text-lg md:text-2xl font-bold text-white">
            Fermin - <span className="text-blue-500">Dash</span>
            </h1>
            <RiNextjsLine size={28} />
        </div>
        
        <p className="text-slate-500 text-sm">
          This is a Dashboard Test
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              width={50}
              height={50}
              src="https://bidenwhitehouse.archives.gov/wp-content/uploads/2021/01/45_donald_trump_resize-850-850.jpg"
              alt=""
            />
          </span>
          <span className="text-sm md:text-base font-bold">Diogenes Fermin</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {
            MenuItems.map((item, i) => (
                <SideBarMenuItem { ...item } key={i}/>
            ))
        }
      </div>
    </div>
  );
}

export default Sidebar