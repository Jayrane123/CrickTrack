// "use client";
// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// interface NavbarProps {3
//     onSearch: (query: string) => void;
//     className?: string;
//   }

// export default function Navbar({ onSearch, className }: NavbarProps) {
//     const [active, setActive] = useState<string | null>(null);
//     const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     onSearch(searchQuery);
//   };
//     return (
//         <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
//             <Menu setActive={setActive}>
//             <MenuItem setActive={setActive} active={active} item="Home">
//             <div className="flex flex-col mt-1 space-y-4 text-sm">
//                 <HoveredLink href="/Live">Live</HoveredLink>
//                 <HoveredLink href="/Complete">Complete</HoveredLink>
//                 <HoveredLink href="/Upcoming">Upcoming</HoveredLink>
//             </div>
//             </MenuItem>
//             <MenuItem setActive={setActive} active={active} item="Ranking">
//             <div className="flex flex-col mt-1 space-y-4 text-sm">
//                 <HoveredLink href="/Live">ICC Mens Ranking</HoveredLink>
//                 <HoveredLink href="/news">ICC Women Ranking</HoveredLink>
//             </div>
//             </MenuItem>
//             <Link href="/news" className="" id="news" >
//             <MenuItem setActive={setActive} active={active} item="News">           
//             </MenuItem>
//             </Link>
//             <form onSubmit={handleSearchSubmit} className="mr-50">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           placeholder="Search..."
//           className="p-2 border text-black rounded"
//         />
//         <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
//           Search
//         </button>
//       </form>
//             </Menu>
            
//         </div>
        
// )}


"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import '@/public/styles/nav.css'

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Implement your search logic here
  };

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}>
      <Menu setActive={setActive} >
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col mt-1 space-y-4 text-sm">
            <HoveredLink href="/Live">Live</HoveredLink>
            <HoveredLink href="/Complete">Complete</HoveredLink>
            <HoveredLink href="/Upcoming">Upcoming</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Ranking">
          <div className="flex flex-col mt-1 space-y-4 text-sm">
            <HoveredLink href="/Live">ICC Mens Ranking</HoveredLink>
            <HoveredLink href="/news">ICC Women Ranking</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/news" className="" id="news">
          <MenuItem setActive={setActive} active={active} item="News"></MenuItem>
        </Link>
        <form onSubmit={handleSearchSubmit} className="mr-50">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="p-2 border text-black rounded"
          />
          <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
            Search
          </button>
        </form>
      </Menu>
    </div>
  );
}
