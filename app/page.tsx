import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import NavBar from "@/components/NavBar";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center bg-gray-100">
      <SignedOut>
        <LandingPage />
      </SignedOut>
      <SignedIn>
        <NavBar />
        <Header />
      </SignedIn>
    </main>
  );
}
