import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div >
      <h1>Sign Up</h1>
      {/* path="/sign-up" routing="path" signInUrl="/sign-in" */}
      <SignUp  />
    </div>
  );
}
