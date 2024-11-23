"use client";

import { Card } from "@/components/ui/card";
import { siteCategories } from "@/lib/site-data";

export function SiteGrid() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    target.parentElement!.classList.add('bg-muted', 'rounded-full');
  };

  return (
    <div className="space-y-12">
      {siteCategories.map((category) => {
        const Icon = category.Icon;
        return (
          <section key={category.id} id={category.id} className="space-y-6">
            <h2 className="text-2xl font-semibold text-pink-600 flex items-center gap-2 pb-2 border-b">
              <Icon className="h-6 w-6" />
              {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.sites.map((site) => (
                <Card key={`${category.id}-${site.url}`} className="hover:shadow-lg transition-shadow">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 h-full"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center">
                        <img
                          src={`https://icon.horse/icon/${new URL(site.url).hostname}`}
                          alt=""
                          className="w-4 h-4"
                          onError={handleImageError}
                        />
                      </div>
                      <h3 className="font-medium truncate">{site.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{site.description}</p>
                  </a>
                </Card>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}