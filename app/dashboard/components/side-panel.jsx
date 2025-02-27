import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { TbMovie } from "react-icons/tb";
import { RiVideoAddFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

export default function SidePanel() {
  return (
    <div className=" flex flex-col p-4 space-y-2">
      <Link href="/dashboard" className="hover:bg-blue-50 text-sm p-2 rounded">
        <div className="flex  items-center gap-2">
          <MdDashboard className="w-5 h-5 text-blue-700" /> Overview
        </div>
      </Link>
      <Link
        href="/dashboard/movies"
        className="hover:bg-blue-50 text-sm p-2 rounded"
      >
        <div className="flex  items-center gap-2">
          <TbMovie className="w-5 h-5  text-blue-700" />
          Movie
        </div>
      </Link>
      <Link
        href="/dashboard/add-movie"
        className="hover:bg-blue-50 text-sm p-2 rounded"
      >
        <div className="flex  items-center gap-2">
          <RiVideoAddFill className="w-5 h-5  text-blue-700" />
          Add Movies
        </div>
      </Link>
      <Link
        href="/dashboard/users"
        className="hover:bg-blue-50 text-sm p-2 rounded"
      >
        <div className="flex  items-center gap-2">
          <FaUserAlt className="w-5 h-5  text-blue-700" />
          Users
        </div>
      </Link>
      <Link
        href="/dashboard/settings"
        className="hover:bg-blue-50 text-sm p-2 rounded"
      >
        <div className="flex  items-center gap-2">
          <IoSettings className="w-5 h-5  text-blue-700" /> Settings
        </div>
      </Link>
    </div>
  );
}
