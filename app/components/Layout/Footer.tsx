import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import LaunchUI from "@/components/logos/launch-ui";
import Link from "next/link";
import Github from "@/components/logos/github";

import config from "@/config";

export default function FooterSection() {
  return (
    <footer className="bg-background w-full px-4">
      <div className="max-w-container mx-auto">
        <Footer className="border-t pt-8">
          <FooterContent className="sm:grid-cols-2 md:grid-cols-3">
            <FooterColumn className="col-span-2 flex-row items-center justify-between gap-8 border-b pb-8 md:col-span-1 md:flex-col md:items-start md:justify-start md:border-b-0">
              <div className="flex items-center gap-2">
                <LaunchUI />
                <h3 className="text-xl font-bold">Blocktracr</h3>
              </div>
              <div className="ml-2.5 flex gap-4 sm:ml-0">
                <Link href="/" className="text-muted-foreground">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Product</h3>
              <Link href="#" className="text-muted-foreground text-sm">
                Documentation
              </Link>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Contact</h3>
              <Link href="#" className="text-muted-foreground text-sm">
                Email
              </Link>
              <Link href="/" className="text-muted-foreground text-sm">
                Github
              </Link>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Legal</h3>
              <Link href="#" className="text-muted-foreground text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-muted-foreground text-sm">
                Cookie Policy
              </Link>
            </FooterColumn>
          </FooterContent>
          <FooterBottom className="border-0">
            <div>
              © {config.footer.year} Lorenzo Palaia. All rights reserved
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
