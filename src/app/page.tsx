'use client';

import React, { useState } from 'react';
import ChangeRobotButton from '@/components/ChangeRobotButton';

export default function Home() {
	const [image, setImage] = useState<string>('');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleImage = (color: string) => {
		setImage(color);
		setIsModalOpen(false);
	};

	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-between p-24 text-center bg-[url('/img/fundo.jpg')] bg-cover">
				<div className='relative'>
					<button
						onClick={() => setIsModalOpen(true)}
						className='hidden md:block fixed left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-400 text-white font-bold rounded'
					>
						Trocar cor do seu Robotron
					</button>
					<img
						className='w-96 md:mx-auto'
						src={`/img/Robotron 3000 - ${image || 'Azul'}.png`}
						alt="Robotron"
					/>

					<button
						onClick={() => setIsModalOpen(true)}
						className="md:hidden block mx-auto mt-4 px-4 py-2 bg-blue-400 text-white font-bold rounded"
					>
						Trocar cor do seu Robotron
					</button>
				</div>

				{isModalOpen && (
					<div
						className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center"
						onClick={() => setIsModalOpen(false)}
					>
						<div className="bg-white p-8 rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
							<h2 className="text-4xl font-bold mb-4 text-blue-400">Escolha uma cor</h2>
							<div className="grid grid-cols-3 gap-4">
								<ChangeRobotButton color="Azul" onClick={() => handleImage('Azul')} />
								<ChangeRobotButton color="Amarelo" onClick={() => handleImage('Amarelo')} />
								<ChangeRobotButton color="Branco" onClick={() => handleImage('Branco')} />
								<ChangeRobotButton color="Preto" onClick={() => handleImage('Preto')} />
								<ChangeRobotButton color="Rosa" onClick={() => handleImage('Rosa')} />
								<ChangeRobotButton color="Vermelho" onClick={() => handleImage('Vermelho')} />
							</div>
						</div>
					</div>
				)}
			</main>
		</>
	);
}
