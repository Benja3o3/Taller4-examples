"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header({ searchParams }) {
    const path = usePathname();
    return (
        <nav className="p-2 pt-4 flex flex-row justify-between items-center gap-2">
            <Link
                href="/router"
                className={`p-2 rounded-xl hover:scale-125 transition hover:text-white ${
                    path === "/router" ? "text-white scale-125" : ""
                }`}
            >
                Router
            </Link>
            <Link
                href="/components"
                className={`p-2 rounded-xl hover:scale-125 transition hover:text-white ${
                    path === "/components" ? "text-white scale-125" : ""
                }`}
            >
                Componentes
            </Link>
            <Link
                href="/hooks"
                className={`p-2 rounded-xl hover:scale-125 transition hover:text-white ${
                    path === "/hooks" ? "text-white scale-125" : ""
                }`}
            >
                Hooks
            </Link>
            <Link
                href="/localstorage"
                className={`p-2 rounded-xl hover:scale-125 transition hover:text-white ${
                    path === "/localstorage" ? "text-white scale-125" : ""
                }`}
            >
                LocalStorage
            </Link>
            <Link
                href="/datamapping"
                className={`p-2 rounded-xl hover:scale-125 transition hover:text-white ${
                    path === "/datamapping" ? "text-white scale-125" : ""
                }`}
            >
                Data Mapping
            </Link>
        </nav>
    );
}

export default Header;
