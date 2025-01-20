import Image from "next/image";
import Link from "next/link";
import avatar from "../img/avatar.png";
import alert from "../img/Vector.png";
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

const Navchat = () => {
  return (
    <div className="bg-green-800 ">
      <div>
        <div className="py-2 px-5 flex justify-between z-10 sticky top-0 shadow-sm ">
          <Link href="/">
            <Image
              src={avatar}
              alt="our website logo"
              width={50}
              className="rounded-full"
            />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Link href="/">
                <Image
                  src={alert}
                  alt="our website logo"
                  width={20}
                  className=""
                />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel> Messages</DropdownMenuLabel>

              <DropdownMenuSeparator />
              {/* <Link href='/profile'> <DropdownMenuItem>Profile</DropdownMenuItem></Link> */}

              <Link href="/profile">
                <DropdownMenuItem>No message yet</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navchat;
