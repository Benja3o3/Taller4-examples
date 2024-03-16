"use client";

import Image from "next/image";
import { Button, Link } from "@chakra-ui/react";
("@chakra-ui/nextjs");

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center p-24 mt-52">
            <h1 className="text-4xl font-bold mb-12">
                Repositorio de ejemplos Taller 4
            </h1>
            <span>Benjamin Cifuentes</span>
        </main>
    );
}
