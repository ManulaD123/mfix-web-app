"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/multi-select";
import { GENRES, RATINGS } from "@/lib/constants";
import { Loader2 } from "lucide-react";
import { createMovie } from "@/lib/actions/movies";
import { useToast } from "@/hooks/use-toast";

export default function AddMovieForm() {
  const [genres, setGenres] = useState([]);
  const [rated, setRated] = useState("");
  const [isLoading, setLoading] = useState("");
  const { toast } = useToast();
  const genresList = GENRES.map((genre) => ({
    label: genre,
    value: genre,
  }));

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title")?.toString();
    const year = Number(formData.get("year"));
    const plot = formData.get("plot")?.toString();
    const poster = formData.get("poster")?.toString();
    const imdb = Number(formData.get("imdb"));
    if (title && year && plot && rated && poster) {
      console.log({ title, year, plot, rated, genres, imdb });
      setLoading(true);
      const resp = await createMovie({
        title,
        year,
        plot,
        poster,
        rated,
        genres,
        imdb: { rating: imdb },
      });
      setLoading(false);
      if (resp.success) {
        toast({
          variant: "success",
          title: "Movie Added Successfully!",
          description: "Movie was added to Mflix database.",
        });
      }
    }
  };

  return (
    <Card className="max-w-2xl mx-auto ">
      <CardHeader>
        <CardTitle>Add Movie</CardTitle>
        <CardDescription>Add a movie to the Mflix database.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmitForm}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Movie Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter the movie title"
            />
          </div>
          <div>
            <Label htmlFor="year">Movie Year</Label>
            <Input
              id="year"
              name="year"
              type="number"
              placeholder="Enter the movie year"
            />
          </div>
          <div>
            <Label htmlFor="plot">Movie Plot</Label>
            <Textarea
              id="plot"
              name="plot"
              placeholder="Enter the movie plot"
            />
          </div>
          <div>
            <Label htmlFor="year">Movie Poster URL</Label>
            <Input
              id="poster"
              name="poster"
              type="text"
              placeholder="Enter the movie poster URL"
            />
          </div>
          <div>
            <Label htmlFor="genres">Movie Genres</Label>
            <MultiSelect
              list={genresList}
              placeholder="Select movie genres"
              selectedItems={genres}
              onValueChange={setGenres}
            />
          </div>
          <div>
            <Label htmlFor="rated">Movie Rated</Label>
            <Select onValueChange={(val) => setRated(val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a rating" />
              </SelectTrigger>
              <SelectContent>
                {RATINGS.map((rating) => (
                  <SelectItem key={rating} value={rating}>
                    {rating}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="year">IMDB Rating</Label>
            <Input
              id="imdb"
              name="imdb"
              max="10.0"
              min="0"
              step="0.1"
              type="number"
              placeholder="Enter imdb rating"
            />
          </div>
        </CardContent>
        <CardFooter className="w-full flex justify-end space-x-2">
          <Button type="reset" variant="outline">
            Clear Form
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="animate-spin" />}Add Movie
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
