import Image from "next/image";
import Link from "next/link";
import logo from "../img/birdimg.png";
// import vinomillz from "../img/vinomillz.jpg"
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="py-4 px-5 flex justify-between z-10 sticky top-0 shadow-sm bg-gray-200"
>
      <Link href="/">
        <Image src={logo} alt="our website logo" width={50} className="rounded-full" />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger>
          {" "}
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="akube profile pic on X"
            />

            <AvatarFallback className="text-black">
              img
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel> Company Profile</DropdownMenuLabel>

          <DropdownMenuSeparator />

          {/* <Link href='/profile'> <DropdownMenuItem>Profile</DropdownMenuItem></Link> */}

          <Link href="/auth">
            {" "}
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
