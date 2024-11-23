import { SearchBar } from '@/components/search-bar';
import { SiteGrid } from '@/components/site-grid';
import { TopSites } from '@/components/top-sites';
import { QuickTools } from '@/components/quick-tools';
import { Wrench } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <SearchBar />
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <SiteGrid />
        </div>
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-card rounded-lg border shadow-sm">
            <div className="p-4 border-b flex items-center gap-2">
              <Wrench className="h-5 w-5 text-pink-600" />
              <h2 className="text-xl font-semibold">实用工具</h2>
            </div>
            <div className="p-4">
              <QuickTools />
            </div>
          </div>
          <TopSites />
        </div>
      </div>
    </div>
  );
}