import { SignedIn } from "@clerk/clerk-react";
import Header from "../components/header";
import { NavLink } from "react-router";
import PrimaryButton from "../components/ui/button";

export default function Home() {
  return (
    <main className="h-screen p-10 w-screen bg-neutral-100 dark:bg-neutral-950">
      <Header />
      <div className="flex flex-col gap-y-10 justify-center items-center w-full py-20">
        <h1 style={{
          fontFamily: "Funnel Display, serif",
          fontOpticalSizing: "auto",
          fontStyle: "normal"
        }} className="text-5xl text-center font-medium leading-14 max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          A very simple code sharing platform
          for <span className="bg-clip-text text-transparent bg-gradient-to-b from-emerald-500 to-emerald-800">educators</span> & students.
        </h1>
        <SignedIn>
        <NavLink to="dashboard">
          <PrimaryButton bgClr="emerald">
            Continue to Dashboard{" "}
            <svg className="size-2 rotate-90" viewBox="0 0 24 24">
              <path className="fill-neutral-100" d="M21 21H3l9-18z" />
            </svg>
          </PrimaryButton>
        </NavLink>
      </SignedIn>
      </div>
    </main>
  );
}
