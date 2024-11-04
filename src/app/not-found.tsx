
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <div className="text-center">
        <h2 className="mb-2 text-lg font-bold">Not Found</h2>
        <p className="mb-4 text-gray-500">Could not find requested resource</p>
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
      </div>
    </div>
  );
}
