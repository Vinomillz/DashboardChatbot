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
    <div className=" rounded-none h-[100vh] pt-2 pl-2">
      {/* FIRST ELEMENT */}
      <div
        className={`flex items-center space-x-3 w-full p-2 text-lg  ${
          isActive("/dashboard")
            ? "text-white bg-green-700 rounded-lg"
            : ""
        }`}
      >
        <User className="h-9 w-8" />
        <Link href="/dashboard">
          <div>Dashboard</div>
        </Link>
      </div>

      <div
        className={`flex items-center space-x-3 w-full p-2 text-lg  ${
          isActive("/dashboard/drivers")
            ? "text-white bg-green-700 rounded-lg"
            : ""
        }`}
      >
        <Bike className="h-9 w-8" />
        <Link href="/dashboard/drivers">
          <div>Riders</div>
        </Link>
      </div>

      <div
        className={`flex items-center space-x-3 w-full p-2 text-lg  ${
          isActive("/dashboard/posts")
            ? "text-white bg-green-700 rounded-lg"
            : ""
        }`}
      >
        <PackageOpen className="h-9 w-8" />
        <Link href="/dashboard/posts">
          <div>Deliveries</div>
        </Link>
      </div>

      <div
        className={`flex items-center space-x-3 w-full p-2 text-lg  ${
          isActive("/dashboard/vendors")
            ? "text-white bg-green-700 rounded-lg"
            : ""
        }`}
      >
        <BriefcaseBusiness className="h-9 w-8" />
        <Link href="/dashboard/vendors">
          <p>Vendors</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
