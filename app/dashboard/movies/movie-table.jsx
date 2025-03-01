"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export default function MovieTable({ movies }) {
  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold"># Cover</TableHead>
            <TableHead className="font-bold">Movie Title</TableHead>
            <TableHead className="font-bold">Year</TableHead>
            <TableHead className="font-bold">Rated</TableHead>
            <TableHead className="font-bold">IMDB</TableHead>
            <TableHead className="font-bold">Genres</TableHead>
            <TableHead className="font-bold text-center pl-36">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {movies.map((movie) => (
            <TableRow key={movie.id} className="font-semibold">
              <TableCell>
                <Image
                  width={100}
                  height={150}
                  src={movie.poster}
                  alt={movie.title}
                />
              </TableCell>
              <TableCell>{movie?.title ?? "N/A"}</TableCell>
              <TableCell>{movie?.year ?? "N/A"}</TableCell>
              <TableCell>{movie?.rated ?? "N/A"}</TableCell>
              <TableCell>{movie?.imdb?.rating ?? "N/A"}</TableCell>
              <TableCell>{movie?.genres?.join(", ")}</TableCell>
              <TableCell>
                <div className="flex justify-end space-x-2 mr-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="min-w-[120px]"
                    onClick={() => handleEdit(movie)}
                    handleDelete
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="min-w-[120px]"
                    onClick={() => handleDelete(movie)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
