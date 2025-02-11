"use client"; // Needed if using useState/useEffect in Next.js App Router

import Link from "next/link";

const Navbar = () => {
return (
    <nav className="bg-green-900 p-4 text-white border-b-2 border-green-500">
    <div className="container mx-auto flex justify-between items-center">
    {/* Left Section: Logo */}
    <Link href="/" className="text-xl font-bold border border-white p-2 rounded-md">
    To Do List Tracker
    </Link>

    {/* Center Section: About & Contact Buttons */}
    <div className="flex justify-center items-center space-x-10">
    <Link href="/about" className="border border-white p-2 rounded-md">About</Link>
    <Link href="/contact" className="border border-white p-2 rounded-md">Contact</Link>
    </div>
</div>

    </nav>
);
};

export default Navbar;
