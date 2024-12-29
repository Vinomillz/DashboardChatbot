import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command"
  
  import Link from "next/link";

import {  User, Bike, PackageOpen } from "lucide-react";

const Sidebar = () => {
    return (<Command className="bg-secondary rounded-none">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem><User className="mr-2 h-4 w-4" /> <Link href='/'> Dashboard</Link></CommandItem>
            <CommandItem><Bike className="mr-2 h-4 w-4" /> <Link href='/posts'> Riders</Link></CommandItem>
            <CommandItem><PackageOpen className="mr-2 h-4 w-4" /> <Link href='#'> Deliveries</Link></CommandItem>
           
          </CommandGroup>
          <CommandSeparator />
         
        </CommandList>
      </Command>
      );
}
 
export default Sidebar;