import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm dark:bg-gray-950">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2" href="/">
          <MountainIcon className="h-6 w-6" />
          {/* <span className="text-lg font-semibold">Acme University</span> */}
        </Link>
        <div className="hidden lg:flex items-center space-x-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/universities">
            Explore Universities
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Blogs
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/ask-our-experts">
            Ask our Experts
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Button size="sm" variant="outline">
            Sign In
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="p-4" side="left">
            <div className="mt-7 grid gap-4">
              <Link
                className="flex items-center justify-between text-sm font-medium hover:underline underline-offset-4"
                href="/universities"
              >
                Explore Universities
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
              <Link
                className="flex items-center justify-between text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Blogs
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
              <Link
                className="flex items-center justify-between text-sm font-medium hover:underline underline-offset-4"
                href="/ask-our-experts"
              >
                Ask our Experts
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
              <Link
                className="flex items-center justify-between text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                About
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
              <Button size="sm" variant="outline">
                Sign In
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
