import { Section } from "@/components/ui/section";

export default function ForgotPassword() {
  return (
    <Section>
      <h1>Forgot Password</h1>
      <p>
        Enter your email address and we&apos;ll send you a link to reset your
        password.
      </p>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <button type="submit">Send reset link</button>
      </form>
    </Section>
  );
}
