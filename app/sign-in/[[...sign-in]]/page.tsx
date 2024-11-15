import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div >
      <h1>Sign In</h1>
      {/* path="/sign-in" routing="path" signUpUrl="/sign-up" */}
      <SignIn  />
    </div>
  );
}
