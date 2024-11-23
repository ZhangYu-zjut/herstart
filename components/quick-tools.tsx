import { Calculator, FileSearch, Home, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuickTools() {
  const tools = [
    {
      name: "在线计算器",
      url: "https://www.calculator.net",
      icon: <Calculator className="h-4 w-4" />
    },
    {
      name: "社保查询",
      url: "http://si.12333.gov.cn",
      icon: <FileSearch className="h-4 w-4" />
    },
    {
      name: "房贷计算",
      url: "https://www.fangdaijisuanqi.com",
      icon: <Home className="h-4 w-4" />
    },
    {
      name: "个税查询",
      url: "https://etax.chinatax.gov.cn/webApp/pages/confirmedQuery/confirmedQuery.html",
      icon: <Receipt className="h-4 w-4" />
    }
  ];

  return (
    <div className="bg-card rounded-lg border shadow-sm mb-8">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">实用工具</h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-2">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-full justify-start gap-2 text-sm"
              >
                {tool.icon}
                {tool.name}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}