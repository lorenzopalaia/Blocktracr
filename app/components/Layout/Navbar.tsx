"use client";

import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LaunchUI from "@/components/logos/launch-ui";
import Link from "next/link";
import ThemeToggle from "@/app/components/Layout/ThemeToggle";

import { useEffect, useState, useCallback } from "react";

import { createClient } from "@/utils/supabase/client";

interface Profile {
  full_name: string;
  username: string;
  website: string;
  avatar_url: string;
}

export default function Navbar() {
  const supabase = createClient();

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setProfile(null);
        setLoading(false);
        return;
      }

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setProfile(data);
      }
    } catch (error) {
      console.error("An error occurred while fetching user profile", error);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <LaunchUI />
              Blocktracr
            </Link>
            <Navigation />
          </NavbarLeft>
          <NavbarRight>
            <ThemeToggle />
            {loading ? (
              <>
                <div className="bg-muted h-9 w-24 animate-pulse rounded-md" />
                <div className="bg-muted h-9 w-24 animate-pulse rounded-md" />
              </>
            ) : profile ? (
              <>
                <Button variant="outline">
                  <Link href="/account">Account</Link>
                </Button>
                <Button>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              </>
            ) : (
              <>
                <Link href="/signin" className="hidden text-sm md:block">
                  Sign In
                </Link>
                <Button variant="default" asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
              </>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>Blocktracr</span>
                  </Link>
                  <Link
                    href="/coins"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Coins
                  </Link>
                  <Link
                    href="/dashboard"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/demo"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Demo
                  </Link>
                  <Link
                    href="/signin"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
