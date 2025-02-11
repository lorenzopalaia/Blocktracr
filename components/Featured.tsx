import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface FeaturedProps {
  emoji: string;
  text: string;
  link: string;
}

export default function Featured({ emoji, text, link }: FeaturedProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      <AnimatedGradientText>
        {emoji} <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          {text}
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </Link>
  );
}
