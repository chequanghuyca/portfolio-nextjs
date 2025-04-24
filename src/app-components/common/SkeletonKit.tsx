import UISkeleton, {
	SkeletonProps,
	SkeletonThemeProps,
	SkeletonTheme as UISkeletonTheme,
} from 'react-loading-skeleton';

interface WithSkeletonKit {
	Item: React.FC<SkeletonProps>;
	Theme: React.FC<SkeletonThemeProps>;
}

const SkeletonKit: WithSkeletonKit = () => {
	return <></>;
};

SkeletonKit.Item = function SkeletonItem(props: SkeletonProps) {
	return <UISkeleton enableAnimation {...props} />;
};

SkeletonKit.Theme = function SkeletonTheme({ children }) {
	return (
		<UISkeletonTheme baseColor="#05013a" highlightColor="#1C1C4D" enableAnimation>
			{children}
		</UISkeletonTheme>
	);
};

export default SkeletonKit;
