import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getMovies } from "@/lib/apis/server";
import { LiaImdb } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function MoviesPublicPage() {
  const moviesQuery = await getMovies();
  console.log(moviesQuery);

  return (
    <div className=" container space-y-4 my-12  ">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">Browse Movies</h1>
        <Link href="/dashboard/movies">
          <Button>
            <LayoutDashboard />
            Go to Dashboard
          </Button>
        </Link>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {moviesQuery?.length &&
          moviesQuery.map((movie) => (
            <div key={movie?._id} className="h-[480px]">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">
                    {movie?.title}{" "}
                    <span className="text-xs text-neutral-400 font-normal">
                      -{movie?.year ?? "N/A"}
                    </span>{" "}
                  </CardTitle>
                  <CardDescription className="sr-only">
                    {movie?.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center bg-black w-full h-[220px] mb-4 rounded">
                    {movie?.poster && (
                      <Image
                        src={movie?.poster}
                        alt={movie?.title}
                        width={200}
                        height={400}
                        className="h-full w-auto object-contain "
                        priority={true}
                      />
                    )}
                  </div>
                  <div className="flex flex-col justify-between h-[154px]">
                    <p className="line-clamp-3 text-xs">{movie?.plot}</p>
                    <div className="text-sm text-blue-900 font-semibold">
                      {movie?.genres?.length && movie?.genres?.join(" / ")}
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <Badge variant="success" className="font-medium">
                        Rated: {movie?.rated ?? "N/A"}
                      </Badge>
                      <div
                        className="flex flex-row gap-2 items-center"
                        title="IMDB Rating"
                      >
                        <LiaImdb className="text-yellow-600 text-3xl" />
                        <span className="text-sm font-semibold">
                          {movie?.imdb?.rating ?? 0}/10
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between"></CardFooter>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}
