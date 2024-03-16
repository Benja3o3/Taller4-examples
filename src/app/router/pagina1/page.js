"use client";
import React from "react";
import Link from "next/link";

function Pagina1() {
    return (
        <div className="flex flex-col gap-2 justify-center items-center pt-24">
            <div className="">Pagina 1</div>
            <Link href="/router">Volver</Link>
        </div>
    );
}

export default Pagina1;
