import ShipmentCard from "@/components/ShipmentCard";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../../img/LOGOFLEETY.jpg";
import { Cog } from "lucide-react";

const VendorDashboard = () => {
  return (
    <div className=" bg-gray-100 min-h-screen">

<div className="bg-[#092948]  ">
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
              <Cog width={50} className="text-white " />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel> API KEY</DropdownMenuLabel>

              <DropdownMenuSeparator />
              {/* <Link href='/profile'> <DropdownMenuItem>Profile</DropdownMenuItem></Link> */}

              <Link href="/profile">
                <DropdownMenuItem>12345676890e</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>


      <h1 className="text-2xl font-bold text-center mb-6 pt-10">Vendor Dashboard</h1>

   
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
    <ShipmentCard
      shipmentNumber="ST7890QR12"
      status="Pending"
      from="Nsukka, Obukpa"
      to="Enugu, Agip Hotel"
      receiverName="Umezinwa Vincent"
      receiverNumber="07030026897"
      deliveryFee={54300.0}
    />
    <ShipmentCard
      shipmentNumber="ST7890QR13"
      status="Delivered"
      from="Lagos, Ikeja"
      to="Abuja, Garki"
      receiverName="Engr Emmanuel"
      receiverNumber="08012345678"
      deliveryFee={30000.0}
    />
    <ShipmentCard
      shipmentNumber="ST7890QR14"
      status="In Transit"
      from="Onitsha, Main Market"
      to="Port Harcourt, GRA"
      receiverName="Anderson Omena"
      receiverNumber="08123456789"
      deliveryFee={45000.0}
    />
    <ShipmentCard
      shipmentNumber="ST7890QR15"
      status="Pending"
      from="Benin, Ring Road"
      to="Warri, Airport Road"
      receiverName="Barrack Obama"
      receiverNumber="09087654321"
      deliveryFee={28000.0}
    />
  </div>
</div>

    </div>
  );
};

export default VendorDashboard;
