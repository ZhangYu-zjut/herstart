"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { topSitesData } from "@/lib/site-data";

export function TopSites() {
  const [period, setPeriod] = useState<"week" | "month">("week");

  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4">热门网站排行</h2>
      <Tabs defaultValue="week" onValueChange={(v) => setPeriod(v as "week" | "month")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="week">周榜</TabsTrigger>
          <TabsTrigger value="month">月榜</TabsTrigger>
        </TabsList>
        <TabsContent value="week" className="mt-4">
          <div className="space-y-2">
            {topSitesData.weekly.map((site, index) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg"
              >
                <span className={`font-bold w-6 ${index < 3 ? 'text-pink-500' : 'text-muted-foreground'}`}>
                  {index + 1}
                </span>
                <span>{site.name}</span>
                <span className="ml-auto text-sm text-muted-foreground">
                  {site.visits}访问
                </span>
              </a>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="month" className="mt-4">
          <div className="space-y-2">
            {topSitesData.monthly.map((site, index) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg"
              >
                <span className={`font-bold w-6 ${index < 3 ? 'text-pink-500' : 'text-muted-foreground'}`}>
                  {index + 1}
                </span>
                <span>{site.name}</span>
                <span className="ml-auto text-sm text-muted-foreground">
                  {site.visits}访问
                </span>
              </a>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <p className="text-xs text-muted-foreground mt-4">
        数据来源：基于用户访问量统计
      </p>
    </Card>
  );
}