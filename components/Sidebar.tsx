"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import {
  User,
  Bike,
  PackageOpen,
  BriefcaseBusiness,
} from "lucide-react";

// Define the Sidebar component
const Sidebar = () => {
  const pathname = usePathname(); // Get the current pathname

  // Define the type of 'path' as a string
  const isActive = (path: string): boolean => pathname === path;

  return (
    <div className="bg-secondary rounded-none h-[100vh] pt-2 pl-2">

      {/* FIRST ELEMENT */}
      <div className={`flex items-center space-x-3 w-full p-2 text-lg  ${isActive("/") ? "text-white bg-green-700 rounded-lg" : ""}` }>
        <User className="h-9 w-8" />
        <Link href="/">
          <div>
            Dashboard
          </div>
        </Link>
      </div>

      <div className={`flex items-center space-x-3 w-full p-2 text-lg  ${isActive("/drivers") ? "text-white bg-green-700 rounded-lg" : ""}` }>
        <Bike className="h-9 w-8" />
        <Link href="/drivers">
          <div>
            Riders
          </div>
        </Link>
      </div>

      <div className={`flex items-center space-x-3 w-full p-2 text-lg  ${isActive("/posts") ? "text-white bg-green-700 rounded-lg" : ""}` }>
        <PackageOpen className="h-9 w-8" />
        <Link href="/posts">
          <div>
            Deliveries
          </div>
        </Link>
      </div>

      <div className={`flex items-center space-x-3 w-full p-2 text-lg  ${isActive("/vendors") ? "text-white bg-green-700 rounded-lg" : ""}` }>
        <BriefcaseBusiness className="h-9 w-8" />
        <Link href="/vendors">
          <p>
            Vendors
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
