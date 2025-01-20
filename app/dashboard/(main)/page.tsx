// import { Button } from "@/components/ui/button"
import DashboardCard from "@/components/DashboardCard";
import DriverTable from "@/components/drivers/DriverTable";
import PostsTable from "@/components/posts/PostsTable";
import { Bike, LayoutDashboard, PackageOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="ml-4">
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5  ">
        {/* first box */}
        <div className="">
        <DashboardCard 
          title="Total Vendors"
          count={100}
          icon={
            <LayoutDashboard  size={30} className="text-white"  />
          }
        />
        </div>
       
        <DashboardCard
          title="Total Riders"
          count={30}
          icon={<Bike  size={30} className="text-white" />}
        />
        <DashboardCard 
          title="Total Deliveries"
          count={4435}
          icon={<PackageOpen size={30} className="text-white" />}
        />
      </div>
      <div className="border-2  p-2 rounded-lg bg-slate-200">
        <PostsTable title="Shipment Tracking" limit={5} />
      </div>

      {/* drivers */}
      <div className="border-2  p-2 rounded-lg bg-slate-200 mt-4">
        <DriverTable title="Driver Availability" limit={5} />
      </div>
    </div>
  );
}
