import Link from "next/link";
import { metaData } from "../config";

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-[28px] font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
      </div>
    </nav>
  );
}
