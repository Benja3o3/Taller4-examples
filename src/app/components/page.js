import React from "react";
import Card from "@/components/Card";
import CardProps from "@/components/CardProps";

function Componentes() {
    return (
        <div className="flex flex-col pt-24 justify-center items-center text-center gap-5">
            <h1 className="text-4xl">Componentes</h1>
            <span className="p-1">
                Hacer componentes reutilizables en NextJs es muy sencillo, solo
                es necesario crear un archivo con la extension .jsx o .tsx
                dependiendo de si estas utilizando Javascript o Typescript
                respectivamente.
            </span>
            <span className="p-1">
                Por lo general se crea una carpeta components para guardar los
                componentes que se creen
            </span>
            <span className="p-1">
                Por convencion los archivos .jsx o .tsx van con mayusculas asi
                como la funcion que crees dentro
            </span>
            <div className="flex flex-row gap-2">
                <Card />
                <CardProps text="Hola" />
                <Card />
            </div>
            <span className="p-1">
                Puedes pasarle tantas props como quieras a tus componentes
            </span>
        </div>
    );
}

export default Componentes;
