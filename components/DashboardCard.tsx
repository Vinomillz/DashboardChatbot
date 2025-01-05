import {
    Card,
    CardContent,
  
  } from "@/components/ui/card"
  

import { LucideIcon } from "lucide-react";
interface DashboardCardProps {
    title: string;
    count: number;
    icon: React.ReactElement<LucideIcon>
    // link: string;
}
const DashboardCard = ({title, count, icon} : DashboardCardProps) => {
    return ( 
        <Card className="bg-green-400 dark:bg-slate-800 p-4 pb-0">
<CardContent>
    

    <div className="flex gap-5 justify-left mb-2">
        {icon}

        <span className="text-lg  mb-4 font-thin text-gray-600 dark:text-slate-200 ">{title}</span>
        </div>

        <h3 className="text-6xl font-medium  text-center dark:text-slate-200"> {count}</h3>
    
</CardContent>
        </Card>
       );
}
 
export default DashboardCard;