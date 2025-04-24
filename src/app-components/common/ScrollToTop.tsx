'use client';

import classNames from 'classnames';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {}

const ScrollToTop: React.FC<ScrollToTopProps> = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<button
			className={classNames('scroll-to-top', { visible: isVisible })}
			onClick={scrollToTop}
			aria-label="Scroll to top"
		>
			<ChevronUp />
		</button>
	);
};

export default ScrollToTop;
