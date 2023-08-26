'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function FlatButton({
	text,
	onClick = null,
	param = null,
	textColor = null,
	hover = null,
	size = null,
	textSize = null,
	fontSize = null,
	endIcon = null,
}) {
	const router = useRouter();

	const handleClick = () => {
		if (param) {
			router.push(param);
		} else if (onClick) {
			onClick();
		}
	};

	const buttonStyles = `
	  flex items-center rounded-xl text-lg font-medium hover:gap-1
	  ${textColor ? `text-${textColor}` : 'text-blue-500'}
	  ${size === 'medium' ? 'px-4 py-2' : 'px-2 py-1'}
      ${textSize ? textSize : 'text-lg'} 
      ${fontSize ? fontSize : 'font-medium'}
      ${hover ? `hover:bg-${hover}` : 'hover:bg-gray-100'}
	`;

	return (
		<button className={buttonStyles} onClick={handleClick}>
			{text}
			{endIcon}
		</button>
	);
}
