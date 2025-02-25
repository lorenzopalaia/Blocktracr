"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { type User } from "@supabase/supabase-js";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

import { toast } from "sonner";

import Avatar from "./Avatar";

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, username, website, avatar_url`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        console.error("Error loading user data:", error);
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      console.error("Error loading user data:", error);
      toast.error("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string | null;
    fullname: string | null;
    website: string | null;
    avatar_url: string | null;
  }) {
    try {
      setLoading(true);

      const { error } = await supabase.from("profiles").upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) {
        console.error("Error updating the data:", error);
        throw error;
      }
      toast.success("Profile updated!");
    } catch (error) {
      console.error("Error updating the data:", error);
      toast.error("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section>
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-4xl flex-col flex-wrap justify-center gap-12 p-4">
          <div className="space-y-4">
            <Avatar
              uid={user?.id ?? null}
              url={avatar_url}
              size={150}
              onUpload={(url) => {
                setAvatarUrl(url);
                updateProfile({ fullname, username, website, avatar_url: url });
              }}
            />

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="text" value={user?.email} disabled />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                value={fullname || ""}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username || ""}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="url"
                value={website || ""}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() =>
                updateProfile({ fullname, username, website, avatar_url })
              }
              disabled={loading}
              className="w-full cursor-pointer"
            >
              {loading ? "Loading ..." : "Update"}
            </Button>

            <form action="/api/auth/signout" method="post">
              <Button
                type="submit"
                variant="outline"
                className="w-full cursor-pointer"
              >
                Sign out
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
