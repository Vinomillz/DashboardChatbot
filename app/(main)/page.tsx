// import { Button } from "@/components/ui/button"
import DashboardCard from "@/components/DashboardCard"
import PostsTable from "@/components/posts/PostsTable";
import { Bike, LayoutDashboard, PackageOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="ml-4">

    <div className="flex flex-col md:flex-row justify-between gap-5 mb-5  ">

      <DashboardCard title="Total Vendors"  count={100} icon={<LayoutDashboard className="text-slate-500 " size={72} />} />
      <DashboardCard title="Total Riders" count={30} icon={<Bike className="text-slate-500 " size={72} />} />
       <DashboardCard title="Total Deliveries" count={2000} icon={<PackageOpen className="text-slate-500 " size={72} />} /> 
       
    </div>
    
    <PostsTable title="Shipment Tracking" limit={5} />
    
    </div>
  )
}
