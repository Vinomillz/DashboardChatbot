import Image from "next/image"
import Link from "next/link"
import logo from "../img/birdimg.png"
// import vinomillz from "../img/vinomillz.jpg"
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

const Navbar = () => {
    return ( <div className="bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between  text-white">

        <Link href='/'>  

        <Image src={logo} alt='our website logo' width={40} />
        

       
        </Link>
       

        <DropdownMenu>
  <DropdownMenuTrigger> <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt="akube profile pic on X" />

            <AvatarFallback className="text-black">img</AvatarFallback>
        </Avatar></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel> Company Profile</DropdownMenuLabel>
  
    <DropdownMenuSeparator />

    {/* <Link href='/profile'> <DropdownMenuItem>Profile</DropdownMenuItem></Link> */}
  
    <Link href='/auth'> <DropdownMenuItem>Logout</DropdownMenuItem></Link>
   
  </DropdownMenuContent>
</DropdownMenu>

    </div> );
}
 
export default Navbar;