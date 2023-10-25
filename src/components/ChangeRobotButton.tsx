import React from 'react';

interface ColorButtonProps {
	color: string;
	onClick: () => void;
}

export default function ChangeRobotButton({ color, onClick }: ColorButtonProps) {
	return (
		<>
			<button
				className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5 w-21'
				onClick={onClick}
			>
				{color}
			</button>
		</>
	);
}
