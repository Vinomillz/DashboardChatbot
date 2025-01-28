import React from "react";
import { Package, ArrowRight } from "lucide-react"; 

interface ShipmentCardProps {
  shipmentNumber: string;
  status: "Pending" | "Delivered" | "In Transit"; // Extendable for more statuses
  from: string;
  to: string;
  receiverName: string;
  receiverNumber: string;
  deliveryFee: number;
}

const ShipmentCard: React.FC<ShipmentCardProps> = ({
  shipmentNumber,
  status,
  from,
  to,
  receiverName,
  receiverNumber,
  deliveryFee,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-80 border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <Package  className="text-gray-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">Shipment Number</p>
            <p className="font-bold">{shipmentNumber}</p>
          </div>
        </div>
        <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
          {status}
        </span>
      </div>

      {/* Route */}
      <div className="flex justify-between items-center border-t pt-2 mb-2">
        <p className="text-sm font-medium">{from}</p>
        <ArrowRight  size={16} className="text-gray-500" />
        <p className="text-sm font-medium">{to}</p>
      </div>

      {/* Receiver Info */}
      <div className="text-xs text-gray-600 space-y-1 border-t pt-2 mb-2">
        <p>
          <span className="font-semibold">Receiver’s Name: </span>
          {receiverName}
        </p>
        <p>
          <span className="font-semibold">Receiver’s Number: </span>
          {receiverNumber}
        </p>
      </div>

      {/* Delivery Fee */}
      <div className="border-t pt-2 mb-3">
        <p className="text-sm font-semibold">
          Delivery Fee: <span className="text-black font-bold">#{deliveryFee.toFixed(2)}</span>
        </p>
      </div>

      {/* Button */}
      <button className="w-full bg-[#092948] text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition">
        VIEW DETAILS
      </button>
    </div>
  );
};

export default ShipmentCard;
