import classNames from 'classnames';
import { ScrollToTop } from '../common';

interface PageContainerProps {
	children?: React.ReactNode;
	className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, className }) => {
	return (
		<div className={classNames('viewMain', className)}>
			{children}
			<ScrollToTop />
		</div>
	);
};

export default PageContainer;
