"use client";

import { Heart, Home, Info, Mail, PieChart } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    label: "Donate",
    icon: Heart,
    href: "/donate",
  },
  {
    label: "Impact",
    icon: PieChart,
    href: "/impact",
  },
  {
    label: "About",
    icon: Info,
    href: "/about",
  },
  {
    label: "Contact",
    icon: Mail,
    href: "/contact",
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="flex justify-between items-center py-3 px-6 w-full">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <nav className="flex flex-col gap-4 p-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
                      pathname === route.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-primary/5",
                    )}
                  >
                    <route.icon className="h-5 w-5" />
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 ml-4">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">FundRaiser</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href
                  ? "text-primary"
                  : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
