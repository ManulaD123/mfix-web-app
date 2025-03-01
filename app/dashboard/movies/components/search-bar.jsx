"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <div className="flex gap-2 pl-2">
      <Input type="text" placeholder="Search Movie...." />
      <Button type="button">Search</Button>
    </div>
  );
}
