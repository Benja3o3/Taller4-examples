import React from "react";

function CardProps({ text }) {
    return (
        <div className="p-2 w-48 rounded-xl bg-gray-400 border border-gray-300 text-black">
            Esta es una card que le pasaron propiedades: {text}
        </div>
    );
}

export default CardProps;
