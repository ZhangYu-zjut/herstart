"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchBar() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const query = new FormData(form).get('q') as string;
    if (query) {
      window.open(`https://www.bing.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
      <Input
        name="q"
        type="search"
        placeholder="搜索你感兴趣的内容..."
        className="pl-4 pr-12 h-12 text-lg rounded-full border-2 border-pink-200 focus:border-pink-400"
      />
      <Button 
        type="submit"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-500 hover:bg-pink-600"
      >
        <Search className="h-5 w-5" />
      </Button>
    </form>
  );
}