
  
  import Link from "next/link";

import {  User, Bike, PackageOpen } from "lucide-react";

const Sidebar = () => {
    return (<div className="bg-secondary rounded-none h-[100vh] p-4">
        
     
        
            
        <div className="flex items-center space-x-3">
  <User className="h-9 w-8" />
  <Link href="/" className="text-lg text-foreground">
    Dashboard
  </Link>
</div>

<div className="flex items-center space-x-3">
  <Bike className="h-9 w-8" />
  <Link href="/posts" className="text-lg text-foreground">
    Riders
  </Link>
</div>

<div className="flex items-center space-x-3">
  <PackageOpen className="h-9 w-8" />
  <Link href="#" className="text-lg text-foreground">
    Deliveries
  </Link>
</div>



      </div>
      );
}
 
export default Sidebar;