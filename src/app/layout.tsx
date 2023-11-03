import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import Favicon from './favicon.ico';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Robotron 3000',
	description: 'Crie seu robô de batalha!',
	icons: [{ rel: 'icon', url: Favicon.src }]
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
