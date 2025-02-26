import PrimaryButton from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Header() {
  return (
    <header className="px-5 flex justify-between py-4">
      <img
        alt="AgoraCode Logo"
        src="/T&W@2x.png"
        className="object-contain h-10"
      />
      <SignedIn>
        <UserButton/>
      </SignedIn>
      <SignedOut>
        <div className="flex gap-x-4 items-center">
          <SignInButton mode="modal">
            <PrimaryButton bgClr="neutral">Log in</PrimaryButton>
          </SignInButton>
          <SignUpButton mode="modal">
            <PrimaryButton bgClr="emerald">
              Sign Up{" "}
              <svg className="size-2 rotate-90" viewBox="0 0 24 24">
                <path className="fill-neutral-100" d="M21 21H3l9-18z" />
              </svg>
            </PrimaryButton>
          </SignUpButton>
        </div>
      </SignedOut>
    </header>
  );
}
