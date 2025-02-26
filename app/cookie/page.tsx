import { Section } from "@/components/ui/section";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Cookies() {
  return (
    <Section>
      <div className="mx-auto max-w-4xl space-y-8 p-6">
        <h1 className="text-3xl font-bold tracking-tight">Cookies</h1>
        <p className="text-muted-foreground leading-7">
          Cookies are small text files that are placed on your computer by
          websites that you visit. They are widely used in order to make
          websites work, or work more efficiently, as well as to provide
          information to the owners of the site.
        </p>
        <p className="text-muted-foreground leading-7">
          The table below explains the cookies we use and why.
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cookie Name</TableHead>
              <TableHead>Purpose</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-mono">
                _next_supabase_session
              </TableCell>
              <TableCell>
                This cookie is used to authenticate users and store session
                data.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono">_next_supabase_anon</TableCell>
              <TableCell>
                This cookie is used to authenticate users without storing
                session data.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono">theme</TableCell>
              <TableCell>
                This cookie is used to store the user&apos;s preferred theme.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono">sb-access-token</TableCell>
              <TableCell>Cookie for authentication token.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono">sb-refresh-token</TableCell>
              <TableCell>Cookie for refresh token.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Section>
  );
}
