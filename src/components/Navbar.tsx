"use client"; // Needed if using useState/useEffect in Next.js App Router

import Link from "next/link";

const Navbar = () => {
return (
    <nav className="bg-green-900 p-4 text-white border-b-2 border-green-500">
    <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">
        To Do List Tracker
        </Link>
        <div className="space-x-4">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact Developer</Link>
        </div>
    </div>
    </nav>
);
};

export default Navbar;
