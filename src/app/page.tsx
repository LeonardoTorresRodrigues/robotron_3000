'use client';

import React, { useState } from 'react';
import ChangeRobotButton from '@/components/ChangeRobotButton';

export default function Home() {
	const [image, setImage] = useState<string>('');

	const handleImage = (color: string) => {
		setImage(color);
	};

	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-between p-24 text-center bg-[url('/img/fundo.jpg')] bg-cover">
				<img
					className='w-96'
					src={`/img/Robotron 3000 - ${image || 'Azul'}.png`}
					alt="Robotron"
				/>
				<div>
					<h2 className='text-8xl text-white font-bold py-2 px-4 bg-blue-500 rounded m-5 w-21'>Trocar cor do seu Robotron</h2>
					<div className='grid sm:grid-cols-1 md:grid-cols-3 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
						<ChangeRobotButton color='Azul' onClick={() => handleImage('Azul')} />
						<ChangeRobotButton color='Amarelo' onClick={() => handleImage('Amarelo')} />
						<ChangeRobotButton color='Branco' onClick={() => handleImage('Branco')} />
						<ChangeRobotButton color='Preto' onClick={() => handleImage('Preto')} />
						<ChangeRobotButton color='Rosa' onClick={() => handleImage('Rosa')} />
						<ChangeRobotButton color='Vermelho' onClick={() => handleImage('Vermelho')} />
					</div>
				</div>
			</main>
		</>
	);
}
