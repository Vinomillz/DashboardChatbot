import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";

import Link from "next/link";

import drivers from "@/data/driver";

import { Driver } from "@/types/driver";

interface DriversTableProps {
  limit?: number;
  title?: string;
}

const DriverTable = ({ limit, title }: DriversTableProps) => {
  // sort driver in descending order based on date

  const sortedPosts: Driver[] = [...drivers].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // filter driver to limit
  const filteredPosts = limit
    ? sortedPosts.slice(0, limit)
    : sortedPosts;

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 ml-4 font-semibold flex justify-between items-center mr-10">
        <span>{title ? title : "Drivers"}</span>

        <Link href="/dashboard/drivers">
          {" "}
          <button
            className="text-green-700 font-bold py-2 
                        rounded "
          >
            View all
          </button>
        </Link>
      </h3>

      <Table>
        <TableCaption>first table i guess</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Driver Id</TableHead>

            <TableHead>Driver Name</TableHead>
            <TableHead className=" md:table-cell">
              {" "}
              Availability
            </TableHead>
            <TableHead className=" md:table-cell ">
              {" "}
              Location
            </TableHead>
            <TableHead> View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((driver) => (
            <TableRow key={driver.id}>
              <TableCell>{driver.id}</TableCell>
              <TableCell className=" md:table-cell">
                {driver.author}
              </TableCell>
              <TableCell>{driver.availability}</TableCell>
              <TableCell className="  md:table-cell">
                {driver.location}
              </TableCell>
              <TableCell>
                <Link href={`/dashboard/posts/edit/${driver.id}`}>
                  <button
                    className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 
                        rounded text-xs "
                  >
                    Edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DriverTable;
