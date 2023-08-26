'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function ActionButton({ text, onClick = null, param = null }) {
	const router = useRouter();

	const handleClick = () => {
		if (param) router.push(param);
		else onClick();
	};
	return (
		<button
			className="rounded-xl bg-indigo-600 px-6 py-2 text-lg font-medium text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700"
			onClick={handleClick}
		>
			{text}
		</button>
	);
}
