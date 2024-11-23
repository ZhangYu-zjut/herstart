import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            她的导航
          </h1>
          <span className="text-sm text-muted-foreground">智慧女性的网络起点</span>
        </div>
        <ModeToggle />
      </div>
    </header>
  )
}