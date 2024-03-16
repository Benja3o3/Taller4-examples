"use client";

import Link from "next/link";

import React from "react";

function Router() {
    return (
        <div className="flex flex-col pt-24 justify-center items-center text-center gap-5">
            <h1 className="text-4xl">ROUTER</h1>
            <span className="p-2 text-xl">
                NextJs trae su propio router con el cual se pueden generar rutas
                de manera muy sencilla
            </span>
            <span>
                Es tan sencillo como crear una carpeta con el nombre de la ruta
                a la que quieres ir, y dentro de esa carpeta crear un archivo
                page.jsx/page.tsx dependiendo de lo que estes utilizando
                (Javascript/Typescript)
            </span>
            <span>
                Para ello utiliza la etiqueta {"<Link href=(ruta)>"} en donde
                "ruta" es la direcion URL a la que quieres ir
            </span>
            <div className="flex flex-row gap-5">
                {/* Estos son los links que te redirigiran a las paginas 1 y 2 */}
                <Link href="/router/pagina1">Pagina 1</Link>
                <Link href="/router/pagina2">Pagina 2</Link>
            </div>
            <Link
                href="/"
                className="p-2 rounded-xl opacity-90 hover:scale-110 transition"
            >
                Volver al inicio
            </Link>
        </div>
    );
}

export default Router;
