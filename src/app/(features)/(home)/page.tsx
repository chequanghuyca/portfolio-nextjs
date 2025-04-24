import PageContainer from '@/app-components/layout/PageContainer';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

interface HomePageProps {}

export const metadata: Metadata = {
	title: 'Huy Che | Home',
	description: 'Huy Che | Home',
};

const HomePage: React.FC<HomePageProps> = () => {
	return <PageContainer className="">huyche</PageContainer>;
};

export default HomePage;
