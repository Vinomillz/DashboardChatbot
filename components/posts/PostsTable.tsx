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
import posts from "@/data/posts";
import { Post } from "@/types/posts";

interface PostsTableProps {
  limit?: number;
  title?: string;
}

const PostsTable = ({ limit, title }: PostsTableProps) => {
  // sort post in descending order based on date

  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // filter post to limit
  const filteredPosts = limit
    ? sortedPosts.slice(0, limit)
    : sortedPosts;

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 ml-4 font-semibold flex justify-between items-center mr-10">
        <span>{title ? title : "Posts"}</span>

        <Link href="/dashboard/posts">
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
            <TableHead>Shipment Id</TableHead>
            <TableHead>vendor name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead className="hidden md:table-cell">
              {" "}
              Driver
            </TableHead>
            <TableHead className="hidden md:table-cell text-right">
              {" "}
              Est Delivery
            </TableHead>
            <TableHead> View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>#{post.id}</TableCell>
              <TableCell>{post.vendor}</TableCell>
              <TableCell>{post.status}</TableCell>
              <TableCell>{post.destination}</TableCell>
              <TableCell className="hidden md:table-cell">
                {post.author}
              </TableCell>
              <TableCell className="text-right hidden md:table-cell">
                {post.date}
              </TableCell>
              <TableCell>
                <Link href={`/dashboard/posts/edit/${post.id}`}>
                  <button
                    className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 
                        rounded text-xs"
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

export default PostsTable;
