import React from "react";

export default function FlatButton({ text, endIcon = null, onClick = null }) {
    return (
        <button
            className="flex items-center hover:gap-1 hover:bg-gray-100 text-blue-500 px-2 py-1 rounded-xl font-medium text-lg"
            onClick={onClick}
        >
            {text}
            {endIcon}
        </button>
    );
}
