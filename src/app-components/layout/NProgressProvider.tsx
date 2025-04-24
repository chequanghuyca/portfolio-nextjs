'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import '../../../public/vendors/nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

export default function NProgressProvider() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		NProgress.start();

		const timer = setTimeout(() => {
			NProgress.done();
		}, 300);

		return () => {
			clearTimeout(timer);
			NProgress.done();
		};
	}, [pathname, searchParams]);

	return null;
}
