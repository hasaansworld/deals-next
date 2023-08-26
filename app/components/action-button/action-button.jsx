import React from "react";

export default function ActionButton({ text, onClick = null }) {
    return (
        <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl font-medium shadow-lg shadow-indigo-500/30 text-lg"
            onClick={onClick}
        >
            {text}
        </button>
    );
}
