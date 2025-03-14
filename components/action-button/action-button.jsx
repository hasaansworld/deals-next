'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function ActionButton({
	text,
	onClick = null,
	url = null,
	backgroundColor = null,
	textColor = null,
	hover = null,
	shadow = null,
	size = null,
	textSize = null,
	fontSize = null,
	endIcon = null,
}) {
	const router = useRouter();

	const handleClick = () => {
		if (url) {
			router.push(url);
		} else if (onClick) {
			onClick();
		}
	};

	// Apply conditional styles based on prop values
	const buttonStyles = `
      rounded-xl flex items-center gap-2 hover:gap-3
      ${backgroundColor ? `bg-${backgroundColor}` : 'bg-indigo-600'}
      ${size === 'small' ? 'px-4 py-2' : 'px-6 py-2'}
      ${textColor ? `text-${textColor}` : 'text-white'}
      ${textSize ? textSize : 'text-lg'} 
      ${fontSize ? fontSize : 'font-medium'}
      ${shadow ? shadow : 'shadow-lg shadow-indigo-500/30'}
      ${hover ? `hover:bg-${hover}` : 'hover:bg-indigo-700'}
    `;

	return (
		<button className={buttonStyles} onClick={handleClick}>
			{text}
			{endIcon}
		</button>
	);
}
