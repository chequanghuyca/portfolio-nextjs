import '@/assets/styles/main.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import NProgressProvider from '@/app-components/layout/NProgressProvider';

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	viewportFit: 'cover',
	themeColor: '#05013a',
};

export const metadata: Metadata = {
	title: 'Huy Che',
	description: 'Huy Che - Personal Blog',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<Suspense fallback={null}>
					<NProgressProvider />
				</Suspense>
				{children}
			</body>
		</html>
	);
}
